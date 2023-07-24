import React, { useState } from "react";


import { MdSearch } from "react-icons/md";

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import gitHubLogo from '../../assets/images/github-logo.svg';

// eslint-disable-next-line react/function-component-definition
const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={gitHubLogo} alt="API GitHub" />
      <Title>API Github</Title>
      <Form>
        <Input
        placeholder="usuario"
        value={login}
        onChange={(event) => setLogin(event.target.value)} />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  )
};

export default MainPage;
