import { SectionItem } from 'views/types/mainPage'
import { MainSectionWrapper, SectionImage, Content, SectionTitle, SectionText } from './styled'

interface MainSectionProps {
  section: SectionItem
  reverse: boolean
}

export const MainSection: React.FC<MainSectionProps> = ({ section, reverse }) => {
  return (
    <MainSectionWrapper reverse={reverse}>
      <SectionImage>
        <img src={section.url} />
      </SectionImage>
      <Content>
        <SectionTitle>{section.title}</SectionTitle>
        <SectionText>{section.text}</SectionText>
      </Content>
    </MainSectionWrapper>
  )
}
