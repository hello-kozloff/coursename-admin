import styled from 'styled-components';
import { Row } from 'components/common/Row/styled'

export const SignIn = styled.form`
  max-width: 420px;
  margin: 64px auto;
`;

export const Title = styled.h1`
  margin-bottom: 64px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

export const Helpers = styled(Row)`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;

export const Footer = styled.div`
  margin-top: 48px;
`;
