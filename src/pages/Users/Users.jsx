import { userData } from "../../data/userData"
import  UserCard  from "../../components/UserCard/UserCard.jsx"
import './Users.css'
console.log(userData)

const Users = () => {
  return (
    <>
      <h1>User List</h1>
      <div className="card-container">
        {/* map the userData to UserCard components here */}
        {userData.map(user => 
          <UserCard key={user.id} user={user} />
        )}
      </div> 
    </>
  )
}

export default Users;