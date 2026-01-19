import { Container, FooterSection, Link, Links } from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <img src={logo} alt="Efood" />
        <Links>
          <li>
            <Link href="#">
              <img src={instagram} alt="instagram" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src={facebook} alt="facebook" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src={twitter} alt="twitter" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
