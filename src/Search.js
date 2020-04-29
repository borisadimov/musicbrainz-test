import React, {
  useState, useCallback
} from 'react';
import styled from 'styled-components';
import axios from 'axios'

import { SearchCard } from './SearchCard'

const fetchRelease = (release) => {
  const search = `release:${release}`
  const url = 'http://musicbrainz.org/ws/2/release/?query='
  return axios.get(url + encodeURIComponent(search) + '&fmt=json')
}


const Form = styled.form`
  padding: 10px;
  display: flex;
`

const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 16px;
`

function Search({favorites, onRemove, onAdd}) {
  const [data, setData] = useState('')
  const [query, setQuery] = useState('')

  const onSearch = useCallback(() => {
    fetchRelease(query)
    .then(res => {
        setData(res.data)
      }
    )
    
    
  }, [query])
  return (
    <div style={{flex: 1}}>
      <Form onSubmit={(e) => {e.preventDefault(); onSearch()}}>
        <Input type="text" placeholder="Type album name to search" value={query} onChange={(e)=> setQuery(e.target.value)}/>
        <button onClick = { onSearch } style={{marginLeft: '10px'}}>
           Search 
        </button>
      </Form>
      <div>
        {  
          data &&
           data.releases
           .filter(r => r.score > 95)
           .map(r => {
            const isFav = favorites.includes(r.id);
            return ( 
            < SearchCard 
              isFav={isFav} 
              key={r.id} 
              release = { r } 
              toggleFav={(isFav) => {!isFav ? onRemove(r.id) : onAdd(r.id)}} />
            )})

        }

      </div>
      


    </div>
  );
}

export default Search;
