import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

export default class PhoneinfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props

    // if (!data) return null; // 데이터가 없으면 return을 실행하지 않겟다

    const list = data.map(
      info => (<PhoneInfo info={info} key={info.id} />)
    )
    return (
      <div>
        {list}
      </div>
    )
  }
}
