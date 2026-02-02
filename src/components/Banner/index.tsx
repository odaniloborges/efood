import { Categoria, Imagem, Tag, Titulo } from './styles'

type Props = {
  titulo: string
  tipo: string
  imagem: string
}

const Banner = ({ titulo, tipo, imagem }: Props) => (
  <Imagem style={{ backgroundImage: `url(${imagem})` }}>
    <div className="container">
      <Categoria>
        <Tag>{tipo}</Tag>
      </Categoria>
      <div>
        <Titulo>{titulo}</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
