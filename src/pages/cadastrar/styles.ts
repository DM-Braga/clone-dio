import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Wrapper = styled.div`
  max-width: 300px;
`

export const Column = styled.div`
  max-width: 300px;
`

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 388px;
  margin-bottom: 20px
  line-height: 44px;

  color: #FFFFFF;
`

export const TitleCadastro = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  width: 368px;
  line-height: 44px;
`

export const SubTitleCadastro = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  width: 310px;
  line-height: 25px;
`

export const TextPrivaty = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  width: 372px;
  margin-top: 19px;

  color: #FFFFFF
`

export const TenhoConta = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #FFFFFF;

  a {
    color: #23DD7A;
    text-decoration: none;

    &: hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`