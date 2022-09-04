import styled from 'styled-components'
import { Container } from 'components/common/Container/styled'


export const Header = styled.header`
  padding: 16px 0;
  background: linear-gradient(180deg, rgba(0,0,0,.1) 0%, rgba(255,255,255,0) 100%);

  ${Container} {
    height: 36px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }
`

export const ProjectName = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const Username = styled.span`
  
`;

export const AuthGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 16px;
  align-items: center;
`;
