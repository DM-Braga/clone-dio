import React from "react";
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { IHeader } from './types';
import { useNavigate } from "react-router-dom";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
  LogoDio
} from './styles';


const Header = ({autenticado}: IHeader) => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  const handleClickRegistration = () => {
    navigate('/cadastrar')
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <LogoDio src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                  <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/95005260?v=4"></UserPicture>
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn}></Button>
              <Button title="Cadastrar" onClick={handleClickRegistration}></Button>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }