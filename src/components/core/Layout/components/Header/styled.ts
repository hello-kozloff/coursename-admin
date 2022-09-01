import styled from 'styled-components'
import { Container } from 'components/common/Container/styled'


export const Header = styled.header`
  padding: 16px;
  border-bottom: 1px solid gainsboro;
  background-color: #ffffff;
  
  ${Container} {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`

export const ProjectName = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const Username = styled.span`
  
`;

export const AuthGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 16px;
`;
