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
  width: 100%;
  margin: auto;
  ${mobileDevice} {
    flex-direction: column;
    width: 100%;
  }
`;

export const TabPane = styled.button<{ selected?: boolean }>`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.4rem 2rem;
  border: 0;
  outline: none;
  background-color: ${({ theme, selected }) => (selected ? theme.colors.secondary : 'inherit')};
  color: ${({ theme, selected }) => (selected ? theme.colors.textReverse : 'inherit')};
  ${mobileDevice} {
    width: 100%;
    padding: 1rem;
  }
`;

export const TabContent = styled.div`
  margin-top: ${({ theme }) => theme.gutter.medium};
`;
