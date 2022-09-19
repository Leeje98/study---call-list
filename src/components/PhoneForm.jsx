import React, { Component } from 'react'

export default class PhoneForm extends Component {

  input = null

  state = {
    name: '',
    phone: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()  // 원래 해야 할 작업을 막는다 - (type='submit'의 기본기능인 새로고침 방지)
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: '',
    })
    this.input.focus()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name='name'
          placeholder='이름' 
          onChange={this.handleChange} 
          value={this.state.name}
          ref={ ref => this.input = ref}
        />
        <input 
          name='phone'
          placeholder='전화번호' 
          onChange={this.handleChange}
          value={this.state.phone}  
        />
        <button type='submit'>등록</button>
        {/* <div>
          {this.state.name}  {this.state.phone}
        </div> */}
      </form>
    )
  }
}
