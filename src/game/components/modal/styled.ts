import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalButton = styled.div`
  width: 200px;
  height: 50px;
  background-color: rgb(11, 19, 43);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ModalButtonLink = styled(Link)`
  width: 200px;
  height: 50px;
  background-color: rgb(11, 19, 43);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
`;
