const ContactInfo = (props) => {
  return ( 
    <div className="contact-container">
      <div className="contact-info company">{props.user.company.name}</div>
      <div className="contact-info">
        <h4>{props.user.email}</h4>
        <h4>{props.user.phone}</h4>
      </div>
      <div className="contact-info">
        <h4>{props.user.address.street}</h4>
        <h4>{props.user.address.suite}</h4>
        <h4>{props.user.address.city} {props.user.address.zip}</h4>
      </div>
    </div>
  );
}

export default ContactInfo;