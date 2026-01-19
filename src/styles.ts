import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  bege: '#FFF8F2',
  bege2: '#FFEBD9',
  cinza: '#333',
  vermelho: '#E66767',
  cinzaClaro: '#A3A3A3'
}

export const GlobalCss = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.bege};
    color: ${cores.vermelho};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
