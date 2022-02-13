import { InfoCardType, SectionItem } from 'views/types/mainPage'
import { InfoCardWrapper, SectionImage, Content, SectionTitle, SectionText } from './styled'

interface InfoCardProps {
  cardData: SectionItem
  type?: InfoCardType
}

export const InfoCard: React.FC<InfoCardProps> = ({ cardData, type = 'square' }) => {
  return (
    <InfoCardWrapper type={type}>
      <SectionImage>
        <img src={cardData.url} />
      </SectionImage>
      <Content>
        <SectionTitle>{cardData.title}</SectionTitle>
        <SectionText>{cardData.text}</SectionText>
      </Content>
    </InfoCardWrapper>
  )
}
