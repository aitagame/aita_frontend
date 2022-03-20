import { FormWrapper, HackathonWrapper, FormInput } from '../styled';
import { Label, TitleH1 } from 'views/components/Title';
import React, { useEffect, useState } from 'react';
import { Button, ButtonBar } from 'views/components/Button';
import { HackathonModal, HackathonModalStatus } from '../components/HackathonModal';
import { useNear } from 'views/hooks/useNear';
import { v4 as guid } from 'uuid';
import { AppLink } from 'views/components/AppLink';
import { BaseLayout } from 'views/components/BaseLayout';
import { ItemCard } from 'views/pages/main/components/ItemCard';
import { Wrapper } from 'views/components/Wrapper';
import { Content, SectionTitle } from 'views/pages/main/components/ItemsSection/styled';

const MINT_NFT_GAS_LIMIT = 300000000000000;
const MINT_NFT_STORAGE_LIMIT = 0.1 * 10 ** 24;

export const HackathonNFT = () => {
  const transactionId = new URL(document.location.href).searchParams.get('transactionHashes');

  const { nftContract, wallet } = useNear();
  const [message, setMessage] = useState('');
  const [submitMethod, setSubmitMethod] = useState('');
  const [crystalsData, setCrystalsData] = useState<Array<Record<string, string>>>([]);
  const [modalStatus, setModalStatus] = useState<HackathonModalStatus | null>(null);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (!(value instanceof File)) {
        data[key] = value;
      }
    }

    try {
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await (nftContract as any)[submitMethod](
        {
          token_id: data.token_id,
          receiver_id: wallet.getAccountId(),
          token_metadata: {
            title: data.title,
            description: data.description,
            media: data.media,
            copies: parseInt(data.copies) || 1,
          },
        },
        BigInt(MINT_NFT_GAS_LIMIT).toString(),
        BigInt(MINT_NFT_STORAGE_LIMIT).toString()
      );
      setModalStatus('success');
      setMessage(response);
    } catch (e) {
      setModalStatus('error');
    }
  };

  const closeModal = () => {
    setModalStatus(null);
  };
  useEffect(() => {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    (nftContract as any)
      .nft_tokens_for_owner({ account_id: wallet.getAccountId() })
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: Array<any>) => {
        setCrystalsData(
          //eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.map((item: any) => ({
            id: item.token_id,
            copies: item.metadata?.copies,
            title: item.metadata?.title,
            description: item.metada?.description,
            media: item.metadata?.media,
          }))
        );
      });
  }, [nftContract, wallet]);

  return (
    <BaseLayout>
      <HackathonWrapper>
        <TitleH1>Mint NFT!</TitleH1>
        {!transactionId && (
          <FormWrapper onSubmit={onSubmit}>
            <Label>Token ID (auto-generated)</Label>
            <FormInput name="token_id" value={guid()} placeholder="Token ID" readOnly={true} />
            <FormInput name="title" placeholder="Title" />
            <FormInput name="description" placeholder="Short description" />
            <FormInput name="media" placeholder="Media URL" />
            <FormInput name="copies" type="number" placeholder="Copies (number)" />

            <ButtonBar>
              <Button size="large" type="submit" onClick={() => setSubmitMethod('nft_mint')}>
                Submit (as contract owner)
              </Button>
              <Button
                size="large"
                type="submit"
                onClick={() => setSubmitMethod('nft_mint_purchase')}
              >
                Submit (as customer)
              </Button>
            </ButtonBar>
          </FormWrapper>
        )}
        {transactionId && <Label>Minted successfully. Transaction ID: {transactionId}</Label>}
        <AppLink to="../hackathon">Back</AppLink>
      </HackathonWrapper>
      {modalStatus && (
        <HackathonModal onClose={closeModal} status={modalStatus} message={message} />
      )}
      {crystalsData && (
        <Wrapper>
          <SectionTitle>Owned NFTs</SectionTitle>
          <Content>
            {crystalsData && crystalsData.length ? (
              crystalsData.map(item => (
                <ItemCard
                  key={item.id}
                  cardData={{
                    id: item.id,
                    title: item.title,
                    text: item.text,
                    url: item.media,
                  }}
                />
              ))
            ) : (
              <ItemCard
                cardData={{
                  title: 'Nothing found. Upload your first NFT :)',
                  text: 'For storage you can use https://nft.storage/',
                  url: '',
                  id: '',
                }}
                onClick={() => window.open('https://nft.storage', '_blank')}
              />
            )}
          </Content>
        </Wrapper>
      )}
    </BaseLayout>
  );
};
