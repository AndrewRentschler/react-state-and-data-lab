import './UserCard.css'
import ProfileInfo from './ProfileInfo'
import ContactInfo from './ContactInfo'
import { useState } from 'react'

const UserCard = (props) => {
  const [showDetails, setShowDetails] = useState(true)

  const handleShowDetailsClick = () => 
    setShowDetails(!showDetails)

  return ( 
    <div className='user-card'>
      {showDetails ?
        <ProfileInfo key={props.user.id} user={props.user}/>
        :
        <ContactInfo key={props.user.id} user={props.user}/>
      }
      <button onClick={handleShowDetailsClick}>
        {showDetails ? 'Show ': 'Hide '} Contact Info
      </button>
    </div>
  )
}

export default UserCard