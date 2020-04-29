import React from 'react';

import styled from 'styled-components';

import Search from './Search'
import {Library} from './Library'
import {useFavouritesStorage} from './hooks/useFavoriteStorage'

const Layout = styled.div`
  display: flex;

`

function App() {
  const [favorites, {add, remove}] = useFavouritesStorage()
  return (
   <Layout>
     <Search favorites={favorites} onRemove={remove} onAdd={add} />
     <Library favorites={favorites} onRemove={remove}/>
   </Layout>
  );
}

export default App;
