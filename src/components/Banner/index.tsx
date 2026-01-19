import { Categoria, Imagem, Tag, Titulo } from './styles'

import bannerImg from '../../assets/images/dolcePerfil.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Categoria>
        <Tag>Italiana</Tag>
      </Categoria>
      <div>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
