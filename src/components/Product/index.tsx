import Button from '../Button'
import { Card, Descricao, Titulo, Infos, Tag, Categoria, Nota } from './styles'

import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  rating: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, rating, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Categoria>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Categoria>
    <div className="container">
      <Infos>
        <Titulo>{title}</Titulo>
        <Nota>
          {rating} <img src={estrela} alt="estrela" />
        </Nota>
      </Infos>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        to="/perfil"
        title="Clique aqui para aproveitar esta oferta"
      >
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Product
