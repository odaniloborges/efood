import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.bege2};
  padding: 32px 0;
  font-size: 14px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 10px;
      max-width: 480px;
      margin-bottom: 40px;
      text-align: center;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  li:nth-child(2) {
    margin: 0 8px;
  }
`

export const Link = styled.a`
  align-items: center;
  text-decoration: none;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
