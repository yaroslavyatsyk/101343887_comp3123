import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class PersonDetails extends Component {
  render() {
    const person = this.props.person
    return (
        <div>
          <Button>Person Details</Button>
          <p><img src={person.picture.medium}></img></p>
          <p>{person.name.title + " "  + person.name.first + " " + person.name.last + " " + person.login.uuid}</p>
          <p> Gender: {person.gender}</p>
          <p>{person.location.street.number + " " + person.location.street.name + " " +
          person.location.city + " " + person.location.country + " " + person.location.postcode}</p>
          <p>Email: {person.email}</p>
          <p>UserName: {person.login.username}</p>
          <p>Birthday and Age {person.dob.date + " (" + person.dob.age + ")"} </p>
          <p>Registration date: {person.registered.date}</p>
          <p>Phone number: {person.phone}</p>
          <p>Cell phone: {person.cell}</p>
            <hr/>
            <br></br>
            
        </div>
    )
  }
}