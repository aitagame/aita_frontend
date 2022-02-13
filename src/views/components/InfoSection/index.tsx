import { useMemo } from 'react'
import { infoSectionData, mainSectionText, mainSectionTitle } from 'views/data/main'
import { InfoCard } from '../InfoCard'
import { InfoSectionWrapper, Content, SectionTitle, SectionText } from './styled'

export const InfoSection: React.FC = () => {
  const infoCards = useMemo(
    () => infoSectionData.map(card => <InfoCard cardData={card} key={card.id} />),
    []
  )
  return (
    <InfoSectionWrapper>
      <SectionTitle>{mainSectionTitle}</SectionTitle>
      <SectionText>{mainSectionText}</SectionText>
      <Content>{infoCards}</Content>
    </InfoSectionWrapper>
  )
}
