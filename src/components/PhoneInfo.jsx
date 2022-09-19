import React, { Component, Fragment } from 'react'

export default class PhoneInfo extends Component {

  state = {
    editing: false,
    name: '',
    phone: ''
  }

  shouldComponentUpdate(nextProps, nextState) { 
    if(this.state !== nextState) {
      return true
    }  
    return this.props.info !== nextProps.info;
  }




  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id)
  }

  handleToggleEdit = () => {
    // true -> false 전환할때 : onUpdate(값 업데이트하는 기능)
    // false -> true 전환할때 : state에 기존 값들 넣어주기
    const { info, onUpdate } = this.props;
    if (this.state.editing) {  //현재 editing이 ture라면(true로 전환할때/수정버튼 클릭시)
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone  // 기존값들 가져오기
      })
    } else {                   //현재 editing이 false라면(false로 전환할때/적용버튼 클릭시)
      this.setState({          // 값을 업데이트하겟다
        name: info.name,
        phone: info.phone,     // 새로 입력한 값
      })
    }

    this.setState({
      editing: !this.state.editing // editing의 state값을 반전시켜주는 기능
    })
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const { name, phone } = this.props.info;
    const { editing } = this.state;

    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px',
    }

    console.log(name)

    return (
      <div style={style}>
        {
          editing ? (
            <Fragment>
              <div>
                <input 
                  name='name'
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
              <div>
                <input 
                  name='phone'
                  onChange={this.handleChange}  
                  value={this.state.phone}
                />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div><b>{name}</b></div>
              <div>{phone}</div>
            </Fragment>
          )
        }
        <button onClick={this.handleRemove}>삭제</button>
        <button onClick={this.handleToggleEdit}>
          { editing ? '적용' : '수정' }
        </button>
      </div>
    )
  }
}
