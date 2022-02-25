import { Wrapper, HeaderWrapper } from './styled';
import { Form } from 'views/components/Form';
import { Header } from 'views/components/Title';

export const HelloWorld = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Hello there!</Header>
        <Form />
      </HeaderWrapper>
    </Wrapper>
  );
};
