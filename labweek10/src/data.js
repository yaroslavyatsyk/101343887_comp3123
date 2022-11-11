import React, { Component } from "react";
const selections = ['Ontario','Quebec','Manitoba',
'Alberta','Nova Scotia', 'New Brunswick', 
'British Columbia', 'Prince Edward Island',
'Saskatchewan', 'Newfoundland and Labrador']

const INITIAL_VALUE = {
    email: "",
    fullName: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
}

let sortedArray = selections.sort()

export default class DataClass extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {...INITIAL_VALUE,
        table: [], checked: false}
        this.provinces = ["Select Province", ...sortedArray]

        

       
    }
    
    

    onSubmitLogin = (event) => {

        let _table = []
        event.preventDefault()
        console.log("Login Clicked")
        console.log(this.state)

       
        _table.push(<><table className="App">
        <thead>
            <th>Email</th>
            <th>Full Name</th>
            <th>Address</th>
            <th>Address 2</th>
            <th>City</th>
            <th>Province</th>
            <th>Postal Code</th>
        </thead>
        <tbody>
            <tr>
                <td>{this.state.email}</td>
                <td>{this.state.fullName}</td>
                <td>{this.state.address}</td>
                <td>{this.state.address2}</td>
                <td>{this.state.city}</td>
                <td>{this.state.province}</td>
                <td>{this.state.postalCode}</td>
            </tr>
        </tbody>
    </table></>)

    this.setState({table : _table},)
        
        //console.log(event.target)
    }


    clearForm = (event) => {
        event.preventDefault()
        this.setState({...INITIAL_VALUE})
    }
     
    onValueChanged = (event) => {
        ///console.log(event.target.value)

        this.setState({[event.target.name]: event.target.value})
    }

  

    render= () => {
        return(
            <>
                <h1>Data Form Entry</h1>
                <form className="App">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter Email"
                        
                        onChange={event => this.onValueChanged(event)} />
                    <input 
                        type="text" 
                        name="fullName" 
                        placeholder="Enter Full Name"
                        
                        onChange={event => this.onValueChanged(event)} />
                    <select onChange={this.onValueChanged} name="province">
                        {
                            this.provinces.map(province => (
                                <option key={province} value={province}>{province}</option>
                            ))
                        }
                    </select>
                    <br></br>
                    <input type="text" name="address" placeholder="Enter the address"  onChange={event => this.onValueChanged(event)}/>
                    <br></br>
                    <input type="text" name="address2" placeholder="Enter apartment, floor or studio" onChange={event => this.onValueChanged(event)}></input>
                    <input type="text" name="city" placeholder="City"  onChange={event => this.onValueChanged(event)} />
                    <input type="text" name="postalCode" placeholder="Postal Code"  onChange={event => this.onValueChanged(event)} />
                    <br></br>
                    
                    <input 
                        type="submit" 
                        name="btnSubmit" 
                        value="Submit" 
                        onClick={(e) => this.onSubmitLogin(e)} />
                </form>

                <div>{this.state.table}</div>

            </>
        )
    }
}


