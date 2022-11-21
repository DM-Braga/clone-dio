import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight} from './styles'


const Feed = () => {
  return (<>
    <Header autenticado={true} />
    <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># Ranking 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={70} nome="Daniel Marcelo" image="https://avatars.githubusercontent.com/u/95005260?v=4" />
          <UserInfo percentual={50} nome="Daniel Marcelo" image="https://avatars.githubusercontent.com/u/95005260?v=4" />
          <UserInfo percentual={90} nome="Daniel Marcelo" image="https://avatars.githubusercontent.com/u/95005260?v=4" />
          <UserInfo percentual={60} nome="Daniel Marcelo" image="https://avatars.githubusercontent.com/u/95005260?v=4" />
          <UserInfo percentual={80} nome="Daniel Marcelo" image="https://avatars.githubusercontent.com/u/95005260?v=4" />
        </Column>
    </Container>
  </>)
}

export { Feed }