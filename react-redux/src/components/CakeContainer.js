import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  // console.log(`CakeContainer Render`);
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Using Connect :-  Number of Cake - {props.numOfCakes}</h2>
      <input type='number' value={number} onChange={(event) => setNumber(event.target.value)}></input>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(`Inside mapStateToProps`);
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(`Inside mapDispatchToProps`);
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}


export default  connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
