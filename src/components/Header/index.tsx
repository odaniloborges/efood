import { HeaderBar, ImagemFundo, Titulo } from './styles'

import logo from '../../assets/images/logo.svg'
import imagemFundo from '../../assets/images/Vector.png'

const Header = () => (
  <HeaderBar>
    <ImagemFundo style={{ backgroundImage: `url(${imagemFundo})` }}>
      <div className="container">
        <img src={logo} alt="Efood" />
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </div>
    </ImagemFundo>
  </HeaderBar>
)

export default Header
