import { FormWrapper, HackathonWrapper, FormInput } from '../styled';
import { Label, TitleH1 } from 'views/components/Title';
import React, { useState } from 'react';
import { Button } from 'views/components/Button';
import { HackathonModal, HackathonModalStatus } from '../components/HackathonModal';
import { useNear } from 'views/hooks/useNear';
import { v4 as guid } from 'uuid';
import { AppLink } from 'views/components/AppLink';

export const HackathonNFT = () => {
  const { nftContract, wallet } = useNear();
  const [message, setMessage] = useState('');
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
      console.log(
        {
          token_id: '123', //data.token_id,
          receiver_id: wallet.getAccountId(),
          token_metadata: {
            title: data.title,
            description: data.description,
            media: data.media,
            copies: parseInt(data.copies) || 1,
          },
        },
        '300000000000000' /**here should be estimation for gas */,
        (0.1 * 10 ** 24).toString() /**here should be estimation for storage */
      );
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await (nftContract as any).nft_mint(
        {
          token_id: '123', //data.token_id,
          receiver_id: wallet.getAccountId(),
          token_metadata: {
            title: data.title,
            description: data.description,
            media: data.media,
            copies: parseInt(data.copies) || 1,
          },
        },
        '300000000000000' /**here should be estimation for gas */,
        BigInt(0.1 * 10 ** 24).toString() /**here should be estimation for storage */
      );
      setModalStatus('success');
      setMessage(response);
    } catch (e) {
      console.log(e);
      setModalStatus('error');
    }
  };

  const closeModal = () => {
    setModalStatus(null);
  };

  return (
    <>
      <HackathonWrapper>
        <TitleH1>Mint NFT!</TitleH1>
        <FormWrapper onSubmit={onSubmit}>
          <Label>Token ID (auto-generated)</Label>
          <FormInput name="token_id" value={guid()} placeholder="Token ID" readOnly={true} />
          <FormInput name="title" placeholder="Title" />
          <FormInput name="description" placeholder="Short description" />
          <FormInput name="media" placeholder="Media URL" />
          <FormInput name="copies" type="number" placeholder="Copies (number)" />

          <Button size="large" type="submit">
            Submit
          </Button>
        </FormWrapper>
        <AppLink to="../hackathon">Back</AppLink>
      </HackathonWrapper>
      {modalStatus && (
        <HackathonModal onClose={closeModal} status={modalStatus} message={message} />
      )}
    </>
  );
};
