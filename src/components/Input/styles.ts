import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  heigth: 30px;
  border-bottom: 1px solid #3B3450;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const IconContainer = styled.div`
  margin-right: 10px;
`

export const InputText = styled.input`
  background-color: transparent;
  color: #FFFFFF;
  width: 100%;
  border: 0;
  height: 30px;
`

export const ErrorText = styled.p`
  color: #FF5044;
  font-size: 12px;
  margin: 5px 0;
`