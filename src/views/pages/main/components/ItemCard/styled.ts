import styled from 'styled-components';
import { desktopDevice, tabletDevice } from 'views/theme/mediaQuery';

export const ItemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${props =>
    props.onClick &&
    `{
      cursor: pointer;
    }`}

  ${tabletDevice} {
    flex-direction: row;
    text-align: left;
    gap: 1rem;
    align-items: center;
  }
  ${desktopDevice} {
    flex-direction: column;
  }
`;

export const ItemImage = styled.img`
  height: 20vh;
  max-height: 210px;
  object-fit: contain;
`;

export const ItemDescription = styled.div``;

export const SectionTitle = styled.h5`
  font-size: 1.2rem;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.text};
`;
export const SectionText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.25;
`;
