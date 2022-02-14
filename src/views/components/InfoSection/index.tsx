import { infoSectionData, mainSectionText, mainSectionTitle } from 'views/data/main'
import { InfoCard } from '../InfoCard'
import { Wrapper } from '../Wrapper'
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
