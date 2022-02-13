import { infoSectionData, mainSectionText, mainSectionTitle } from 'views/data/main'
import { InfoCard } from '../InfoCard'
import { InfoSectionWrapper, Content, SectionTitle, SectionText } from './styled'

export const InfoSection: React.FC = () => {
  return (
    <InfoSectionWrapper>
      <SectionTitle>{mainSectionTitle}</SectionTitle>
      <SectionText>{mainSectionText}</SectionText>
      <Content>
        {infoSectionData.map(card => (
          <InfoCard cardData={card} key={card.id} />
        ))}
      </Content>
    </InfoSectionWrapper>
  )
}
