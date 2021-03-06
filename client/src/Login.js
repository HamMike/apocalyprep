import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Row, Col, Button} from 'react-materialize';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: '',
      redirect: false
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      console.log('result data', result.data)
      if(result.data.user) {
        localStorage.setItem('mernToken', result.data.token)
        this.props.liftToken(result.data)
      }
    }).catch( err => console.log(err) )
    this.setState({
      redirect: true
    })
}

  render() {
    if (this.state.redirect) {
      return <Redirect to='/location' />
    }

    return (
      <div>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row>
        <Col s={3}></Col>
        <Col className='center' s={6}>
          <form id='loginform' onSubmit={this.handleSubmit}>
            <input placeholder='Email' type='text' value={this.state.email} onChange={this.handleEmailChange} /><br />
            <input placeholder='Password' type="password" value={this.state.password} onChange={this.handlePasswordChange}/><br />
            <Button id='login' className='loginbutton white black-text' waves='light'>Log In</Button>
            <p className='center'>OR</p>
            <Button className='loginbutton white black-text' waves='light'><a href="/auth/google">Sign In with Google</a></Button>
          </form>
        </Col>
        <Col s={3}></Col>
      </Row>
    </div>
    )
  }
}
export default Login;
