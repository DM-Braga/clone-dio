import { useNavigate } from 'react-router-dom';

import bannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Container, TextContent, TitleHighlight, Title } from './styles'


const Home = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (<>
    <Header />
    <Container>
      <div>
        <Title>
          <TitleHighlight>
            Implemente <br />
            o seu futuro global agora!
          </TitleHighlight>
        </Title>
        <TextContent>
          Domine as tecnologias utilizadas pelas impresas mais inovadoras do mundo e encare seu novo
            desafio profissional, evoluindo em comunidade com os melhores experts.
        </TextContent>
        <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
      </div>
      <div>
        <img src={bannerImage} alt="Imagem principal"/>
      </div>
    </Container>
  </>)
}

export { Home }