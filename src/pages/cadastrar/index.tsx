import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';
import { Container, Title, Column, SubTitleCadastro, TitleCadastro, Wrapper, TextPrivaty, TenhoConta } from './styles'
import { IFormData, IReference } from './types';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email('email não é valido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No minímo 3 caracteres').required('Campo obrigatório'),
}).required();

const Cadastrar = ({onClick}: IReference) => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: IFormData) => {
    try{
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
      
      if(data.length === 1){
        navigate('/feed');
      } else {
        alert('Email ou senha inválido')
      }
    }catch{
      alert('Houve um erro, tente novamente.')
    }
  };

  return (<>
    <Header />
    <Container>
      <Column>
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleCadastro>Comece agora grátis</TitleCadastro>
          <SubTitleCadastro>Crie sua conta e make the change._</SubTitleCadastro>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="name" errorMessage={errors?.email?.message} control={control} placeholder="Nome Completo" leftIcon={<MdPerson />} />
            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title="Entrar" variant="secondary" type="submit" />
          </form>
          <Column>
            <TextPrivaty>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO._</TextPrivaty>
            <TenhoConta>já tenho conta. <a href="/login" onClick={handleClickSignIn}>Fazer login</a></TenhoConta>
          </Column>
        </Wrapper>
      </Column>
    </Container>
  </>)
}

export { Cadastrar }