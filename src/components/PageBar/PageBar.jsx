import { useState } from "react"
import { Link } from "react-router-dom"
import { pokeData } from "../../data/pokeData"

const PageBar = (props) => {
  return ( 
    <>
      <form onSubmit={props.handleSubmit()}>
        <label>
          Pokemon per Page {''}
          <select 
            value={numItems}
            >
              <option value={10}>10</option>
              <option value={100}>100</option>
            </select>
        </label>
      </form>


    </>
  )
}

export default PageBar;