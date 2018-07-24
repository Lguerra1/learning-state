import React, { Component } from 'react'


export default class Practice extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            password: ''
        }

        this.handleUpdateUsername = this.handleUpdateUsername.bind(this)
        this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
        this.loginUser = this.loginUser.bind(this)
    }

    handleUpdateUsername(event) {
            this.setState({
            username: event.target.value
        })
    }

    handleUpdatePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    loginUser() {
        console.log(`Logging in ${this.state.username} with password ${this.state.password}`)
    }


    render() {

        return (

            <div>
                <h1> {this.props.title} </h1>

                <input
                value ={this.state.username}
                    onChange={this.handleUpdateUsername}
                    placeholder="Username" />
                <input
                value ={this.state.password}
                    onChange={this.handleUpdatePassword}
                    placeholder="Password" />

                <button
                    onClick={this.loginUser}
                > Login </button>

            </div>
        )
    }
}