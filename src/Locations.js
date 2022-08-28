import React from 'react'
import Card from './Card'

export default function Locations ({ locations, player, connection }) {
  function handleVote(vote) {
    if(player.isSpy) {
      connection.send('vote-event', {
        player: player,
        vote:vote
      })
    }
  }
  
  if (locations && locations.length > 0) {
    return (
      <Card header='📍 Locations' hasBody={false}>
        <ul className='list-group list-group-flush'>
          {locations.map((loc, i) => {
            return (
              <li
                key={i}
                className='list-group-item list-group-item-action text-dark py-1'
                onClick={(e) => {handleVote(e.target.key)}}
              >
                {loc}
              </li>
            )
          })}
        </ul>
      </Card>
    )
  } else {
    return null
  }
}
