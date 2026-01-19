import Restaurante from '../../models/Restaurante'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  restaurantes: Restaurante[]
}

const ProductsList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Product
            key={restaurante.id}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
            rating={restaurante.rating}
            title={restaurante.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
