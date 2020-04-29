import React from 'react';

import { LibraryCard } from './LibraryCard'

 export const Library = ({favorites,onRemove})=>{

    
  return (
    <div style={{flex: 1}}>
      <h1> Library </h1> 
      <div>
        {  
          favorites && favorites.map((id) => (
                < LibraryCard 
                isFav={true} 
                key={id} 
                id={id}
                toggleFav={ () => onRemove(id)} />)
        )}
      </div>
    </div>
  );
}
