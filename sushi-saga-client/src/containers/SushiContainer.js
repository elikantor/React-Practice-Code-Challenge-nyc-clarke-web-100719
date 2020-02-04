import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let displaySushis = props.sushis.map(sushi => <Sushi eaten={props.eaten} eatSushi={props.eatSushi} sushi={sushi} key={sushi.id}/>).slice(props.sushiX, props.sushiY)

  return (
    <Fragment>
      <div className="belt">
        {displaySushis}
        <MoreButton showMore={props.showMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer