import { infoSectionData, mainSectionText, mainSectionTitle } from 'views/pages/main/data'
import { InfoCard } from '../InfoCard'
import { Wrapper } from 'views/components/Wrapper'
import { Content, SectionTitle, SectionText } from './styled'

export const InfoSection: React.FC = () => {
  return (
    <Wrapper>
      <SectionTitle>{mainSectionTitle}</SectionTitle>
      <SectionText>{mainSectionText}</SectionText>
      <Content>
        {infoSectionData.map(card => (
          <InfoCard cardData={card} key={card.id} />
        ))}
      </Content>
    </Wrapper>
  )
}
