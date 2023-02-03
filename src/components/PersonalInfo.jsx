import React from 'react'

const PersonalInfo = (props) => {
  return (
    <div className='personal-info'>
        <p>Name: <strong>{props.name}</strong></p>
        <p>BithDate: <strong>{props.dateOfBirth}</strong></p>
        <p>Address <strong>{props.address}</strong></p>
    </div>
  )
}

export default PersonalInfo