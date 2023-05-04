const ProfileInfo = (props) => {
  return ( 
    <div className="profile-container">
      <img className="user-photo" src={ props.user.avatar } alt="User Avatar"/>
      <h2>{props.user.name}</h2>
      <h3>{`(${props.user.username})`}</h3>
    </div>
  );
}

export default ProfileInfo;