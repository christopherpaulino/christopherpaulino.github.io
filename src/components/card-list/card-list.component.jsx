import React from 'react';

import './card-list.style.css'
import Card from '../card/card.component'



export const CardList = props => {
   if(props.monsters.length >0){
    return (
        <div className="card-list">
            {
              props.monsters.map(monster => (
            <div>
                <Card key={monster.id} monster={monster} />
            </div> ))
             
             } 
        </div> 
    )
   }else {
    return (
        <div >
           <h1>No hay elementos</h1>
        </div> 
    ) 
   }
    
} 