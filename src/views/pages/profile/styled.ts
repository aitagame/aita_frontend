import styled from 'styled-components';
import { Input } from 'views/components/Input';
import { desktopDevice } from 'views/theme/mediaQuery';

export const CreateCharacterWrapper = styled.div`
  width: 86%;
  margin: 0 auto;
`;

export const NameDisplay = styled(Input)`
  margin: 0 auto 3rem;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 0.03rem solid white;
  border-radius: 0;
  width: 50%;
  text-align: center;
  font-size: 1rem;
`;

export const ElementsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gutter.elements};
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.gutter.medium};
  ${desktopDevice} {
    flex-direction: row;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
