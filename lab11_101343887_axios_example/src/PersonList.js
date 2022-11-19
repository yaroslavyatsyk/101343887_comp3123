import React, { Component } from 'react'
import axios from 'axios'
import PersonDetails from './PersonDetails'
import { Button } from 'react-bootstrap'

export default class PersonList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             persons : []
             
        }
    }

    componentDidMount = () =>{
        this.getPersons()
    }
    
    //Get Users
    getPersons = () => {
        axios.get("https://randomuser.me/api/?results=10")
        .then(res =>  { 
            console.log(res.data);
            const persons = res.data.results;
            this.setState({...this.state, persons : persons });
        })
    }

    
    render() {
        return (
            <>
                <h2>Person's list</h2>
                
                {
                    this.state.persons.map(p => (
                        <PersonDetails key={p.id} person={p}></PersonDetails>
                    ))
                }
               
            </>
        )
    }
}
