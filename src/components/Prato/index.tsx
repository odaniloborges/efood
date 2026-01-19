import Button from '../ButtonCarrinho'
import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Prato = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div className="container">
      <Infos>
        <Titulo>{title}</Titulo>
      </Infos>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        to="/perfil"
        title="Clique aqui para aproveitar esta oferta"
      >
        Adicionar ao carrinho
      </Button>
    </div>
  </Card>
)

export default Prato
