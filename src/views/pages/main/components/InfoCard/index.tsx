import { SectionItem } from 'views/types/mainPage'
import { InfoCardWrapper, Content, SectionTitle, SectionText } from './styled'

interface InfoCardProps {
  cardData: SectionItem
}

export const InfoCard: React.FC<InfoCardProps> = ({ cardData }) => {
  return (
    <InfoCardWrapper background={cardData.url}>
      <Content>
        <SectionTitle>{cardData.title}</SectionTitle>
        <SectionText>{cardData.text}</SectionText>
      </Content>
    </InfoCardWrapper>
  )
}
