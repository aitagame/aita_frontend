import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';

export const FormWrapper = styled.form`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center
   text-align: center;
   padding: 2rem 0;
   margin: auto;
   ${desktopDevice} {
      width:500px;
   }
`;
