import React, { Component } from 'react'

export default class Practice2 extends Component {
    constructor (props){
    super(props)       
        this.state = {
            username: ''
        }

        this.updateUsernameValue = this.updateUsernameValue.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    updateUsernameValue(event){
        this.setState({
            username: event.target.value
        })
    }

    handleOnClick(){
        console.log(`Submitting ${this.state.username}`)
    }

    render()  {
        return(

            <div>

            <input  
            value={this.state.username}    
            onChange={this.updateUsernameValue}
            placeholder="User"
            />

            <button 
            onClick={this.handleOnClick}> 
            Submit </button>



            </div>
        )
    }
}