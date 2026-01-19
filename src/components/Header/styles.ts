import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  display: block;
  color: ${cores.vermelho};
`

export const ImagemFundo = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 40px;
    }
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 540px;
  margin-top: 138px;
  text-align: center;
`
