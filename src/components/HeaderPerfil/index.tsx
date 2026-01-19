import { HeaderBar, ImagemFundo, LinkCart, Titulo } from './styles'

import logo from '../../assets/images/logo.svg'
import imagemFundo from '../../assets/images/Vector.png'

const HeaderPerfil = () => (
  <HeaderBar>
    <ImagemFundo style={{ backgroundImage: `url(${imagemFundo})` }}>
      <div className="container">
        <Titulo>Restaurantes</Titulo>
        <img src={logo} alt="Efood" />
        <LinkCart href="">0 - produto(s) no carrinho</LinkCart>
      </div>
    </ImagemFundo>
  </HeaderBar>
)

export default HeaderPerfil
