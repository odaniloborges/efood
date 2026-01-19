import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 214px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  color: ${cores.branca};
`

export const Categoria = styled.div`
  position: absolute;
  top: 16px;
  left: 0;
`

export const Tag = styled.div`
  color: ${cores.branca};
  font-size: 32px;
  font-weight: lighter;
  display: inline-block;
`
