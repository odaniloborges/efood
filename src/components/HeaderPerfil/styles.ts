import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const HeaderBar = styled.header`
  display: block;
  color: ${cores.vermelho};
`

export const ImagemFundo = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;

    img {
      margin-left: 106px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 150px;

    .container {
      justify-content: space-around;

      img {
        margin-right: 40px;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 150px;

    .container {
      padding-top: 0;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;

      img {
        width: 80px;
        height: 80px;
        margin: 0;
      }
    }
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    order: 1;
  }
`

export const LinkCart = styled.span`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`
