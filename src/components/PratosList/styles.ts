import styled from 'styled-components'

import { Props } from '.'
import { cores, breakpoints } from '../../styles'

export const Container = styled.section<Omit<Props, 'restaurante'>>`
  padding: 32px 0;
  background-color: ${cores.bege};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 40px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 32px;
    margin-bottom: 60px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    column-gap: 16px;
    row-gap: 16px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
