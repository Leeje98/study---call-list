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

  id = 0

  state = {
    information: [],
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat(Object.assign({}, data, {
        // ...data,
        // name: data.name,
        // phone: data.phone,
        id: this.id++
      }))
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        {/* {JSON.stringify(this.state.information)} */}
        <PhoneinfoList data={this.state.information}/>
      </div>
    )
  }
}


export default App 

