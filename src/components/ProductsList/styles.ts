import styled from 'styled-components'

import { Props } from '.'
import { cores, breakpoints } from '../../styles'

export const Container = styled.section<Omit<Props, 'restaurante'>>`
  padding: 32px 0;
  background-color: ${cores.bege};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 40px;
    row-gap: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    column-gap: 40px;
    row-gap: 24px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
