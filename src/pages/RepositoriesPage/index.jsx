import React, {useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Profile from './Profile';
import Filter from './Filter';

import { Loading, Container, Main, SideBar } from './styles';
import Repositories from './Repositories';
import { getUser, getRepos, getLangsFrom } from '../../services/api';


// eslint-disable-next-line react/function-component-definition
const RepositoriesPage = () => {

  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async() => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login)
      ]);

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);

      setLanguages(getLangsFrom(repositoriesResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);




  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if(loading){
    return <Loading>Carregando...</Loading>
  }

  return (
  <Container>
    <SideBar>
      <Profile user={user} />
      <Filter languages={languages} currentLanguage={currentLanguage}
      onClick={onFilterClick} />
    </SideBar>
    <Main>
      <Repositories
        repositories={repositories}
        currentLanguage={currentLanguage}
       />
    </Main>
  </Container>
)};

export default RepositoriesPage;
