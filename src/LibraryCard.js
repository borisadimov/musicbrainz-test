import React, { useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components';

const fetchCover = (id) => {
  return axios.get('https://coverartarchive.org/release/'+id)
}

const Card = styled.div`
  width: 600px;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 10px;
  display: flex;
`
const CoverContainer = styled.div`
  background: linear-gradient(180deg, rgba(219, 0, 255, 0.18) 0%, rgba(0, 255, 56, 0.18) 100%);
  width: 200px;
  min-height: 200px;
  position: relative;
`
const Cover = styled.img`
  width: 200px;
  min-height: 200px;
`
const Description = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`
const Star = styled.span`
 position: absolute;
 top: 5px;
 right: 7px;
 filter: grayscale(${props => props.fav ? "0.1" : "1"});
 cursor: pointer;
 outline: none;
   
`
export const LibraryCard = ({
    toggleFav,
    id
  }) => {
  const [cover, setCover] = useState(null)
    useEffect(() => {
      fetchCover(id).then(res => {

        setCover(res.data)
      }).catch(e => console.log(e))
    }, [id])
 return (
   <Card>
      <CoverContainer>
        <Star role="img" aria-label="isFavorite" fav={true} onClick={(e) => {e.preventDefault();toggleFav(false)}}>⭐</Star>
        {
          cover && <Cover src={cover.images[0].thumbnails.small} /> 
          
        }
      </CoverContainer>
      <div>
      <Description >

      </Description>

      </div>
      
      



      
   </Card>
 )
}
