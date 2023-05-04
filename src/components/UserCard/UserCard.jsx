import './UserCard.css'
import ProfileInfo from './ProfileInfo'
import { useState } from 'react'

const UserCard = (props) => {
  const [showDetails, setShowDetails] = useState(false)

  function handleShowDetailsClick() {
    setShowDetails(!showDetails)
  }

  return ( 
    <div className='user-card'>
      <ProfileInfo key={props.user.id} user={props.user}/>
      <button onClick={handleShowDetailsClick}>
        {showDetails ? 'Show ': 'Hide '} Contact Info
      </button>
    </div>
  )
}

export default UserCard