// import PhoneForm from './components/PhoneForm';


// function App() {
//   return (
//     <div>
//       <PhoneForm />
//     </div>
//   );
// }

// export default App;






import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneinfoList from './components/PhoneinfoList';

class App extends Component {

  id = 3

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0001'
      },
      {
        id: 1,
        name: '김민준',
        phone: '010-0000-0002'
      },
      {
        id: 2,
        name: '김벨로퍼트',
        phone: '010-0000-0003'
      },
    ],
    keyword: '',  // 검색키워드
  }


  handleChange = (e) => {    // 검색 이벤트
    this.setState({
      keyword: e.target.value,
    })
  }


  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat(Object.assign({}, data, {
                            // concat: 기존에 있던 배열은 수정하지 않고 새로운 배열만 추가해주는 배열 내장함수
        // ...data,
        // name: data.name,
        // phone: data.phone,
        id: this.id++
      }))
    })
  }


  handleRemove = (id) => {  // 배열에서 요소를 제거하는 이벤트
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id) 
    })
  }

  handleUpadte = (id, data) => {  // 배열에서 요소를 수정하는 이벤트
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) { 
            return {
              id,         // id는 그대로 쓰고
              ...data     // 안의 네임과 전화번호 정보를 새로 가져온다
            }
          }
          return info
        }
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        {/* {JSON.stringify(this.state.information)} */}
        <input 
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder='이름 검색...'
        />
        <PhoneinfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1  
            // 필터 기능 이용하여 검색창에 입력한 값과 일치하는 요소 리턴하게 해주기
            // 검색창에 아무것도 입력하지 않으면 전체 리턴
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpadte}
        />
      </div>
    )
  }
}


export default App 

