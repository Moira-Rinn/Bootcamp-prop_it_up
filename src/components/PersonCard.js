import React from 'react';
const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  return (
    <div>
      <h1><font color="#ffffff">First Name: {firstName}</font></h1>
      <h1><font color="#ffffff">Last Name: {lastName}</font></h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
}
export default PersonCard;