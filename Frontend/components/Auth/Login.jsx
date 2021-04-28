import React from "react";
import styled from 'styled-components';
import { LogIn } from '@styled-icons/boxicons-regular/LogIn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 18rem;
  margin: auto;
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid #fefefe;

  span {
    margin: 5px;
  }
`;

const LoginIcon = styled(LogIn)`
  color: white;
`;

const LoginForm = styled.form`
  width: 90%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  input {
    margin: 10px 0;
    width: 65%;
    background: transparent;
    border: 1px solid white;
    border-radius: 5px;
    height: 2rem;

    ::placeholder {
      color: white;
    }
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    width: 65%;
    height: 3rem;
    border: 1px solid white;
    border-radius: 5px;
    background: transparent;
    color: white;
    cursor: pointer;

    &:hover {
      color: black;
      background: #fefefe;
    }
  }
`;

const Login = () => {
  return (
    // todo: build form handler functions
    // todo: submit handler
    // todo: connect to db
    // todo: to db realated log in

    <Container>
      <LoginIcon />
      <LoginForm>
        <InputBox>
          {/* <label for="email" type="email" name="email">Email:</label> */}
          <input type="email" placeholder="email" />
          {/* <label for="password" type="password" name="password">Password:</label> */}
          <input type="password" placeholder="password" />
        </InputBox>
        <span>Not registered?</span>
        <ButtonBox>
          <button>Login</button>
          {/* <button>Register</button> */}
        </ButtonBox>        
      </LoginForm>
    </Container>
  );
};

export default Login;
