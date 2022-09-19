import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

export default class PhoneinfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data, onRemove, onUpdate } = this.props

    // if (!data) return null; // 데이터가 없으면 return을 실행하지 않겟다

    console.log('rendering list')

    const list = data.map(
      info => (
        <PhoneInfo 
          onRemove={onRemove} 
          onUpdate={onUpdate}
          info={info} 
          key={info.id} 
        />)
    )
    return (
      <div>
        {list}
      </div>
    )
  }
}
