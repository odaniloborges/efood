import { Categoria, Imagem, Tag, Titulo } from './styles'

type Props = {
  titulo: string
  infos: string[]
  imagem: string
}

const Banner = ({ titulo, infos, imagem }: Props) => (
  <Imagem style={{ backgroundImage: `url(${imagem})` }}>
    <div className="container">
      <Categoria>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Categoria>
      <div>
        <Titulo>{titulo}</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
