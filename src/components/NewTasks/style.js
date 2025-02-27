import styled from "styled-components";

export const SNewTasks = styled.form`
  display: flex;
  align-items: center;
  margin: 24px 0px 0px 0px;
  height: 48px;
  width: 100%;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  opacity: 1;
  &:hover{
    border: 1px solid #BBBBBB;
  }
  /* background: #F7F7F7 0% 0% no-repeat padding-box; */
  input{
      background: #F7F7F7 0% 0% no-repeat padding-box;
    font-family: 'Roboto', sans-serif;
    color: #848484;
    opacity: 0.5;
    font-size: 1rem;
    font-weight: 400;
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px 0px 0px 16px;
    border: none;
    &::placeholder{
      color: #848484;
    }
    &:focus{
      background-color: white;
      outline: none;
    }
  }
  button{
    height: 100%;
    width: 48px;
    background-color: #4DA6B3;
    opacity: 0.5;
    border: none;
    border-radius: 0px 4px 4px 0px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    img{
      width: 20px;
      height: 20px;
    }
  }
  .BtnAddPressioned{
    opacity: 1;
  }
  @media screen and (max-width: 391px) and (max-height:900px) {
    margin: 0px;
  }
`