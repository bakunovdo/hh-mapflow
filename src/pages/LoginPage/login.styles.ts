import { Box } from '@chakra-ui/layout';
import styled from '@emotion/styled';

export const PageOuter = styled(Box)`
  background-color: #f3f4f6;
  height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    padding: 1rem 0;
  }
`;

export const FormLogin = styled(Box)`
  background-color: white;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  padding: 2rem;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  @media (max-width: 480px) {
    height: 100%;
  }

  @media (max-width: 640px) {
    width: 100%;
    border-radius: 0;
  }
`;
