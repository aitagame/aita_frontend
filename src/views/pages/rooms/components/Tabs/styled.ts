import styled from 'styled-components';
import { mobileDevice } from 'views/theme/mediaQuery';

export const TabsWrapper = styled.div`
  margin: auto;
`;

export const TabsPaneBox = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobileDevice} {
    flex-direction: column;
  }
`;

export const TabPane = styled.button<{ selected?: boolean }>`
  padding: 0.4rem 2rem;
  border: 0;
  outline: none;
  background-color: ${({ theme, selected }) => (selected ? theme.colors.secondary : 'inherit')};
  color: ${({ theme, selected }) => (selected ? theme.colors.textReverse : 'inherit')};
  ${mobileDevice} {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

export const TabContent = styled.div`
  margin-top: ${({ theme }) => theme.gutter.medium};
`;
