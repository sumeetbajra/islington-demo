import { Component } from 'react';
// const Profile = ({ name }) => {
//   return (
//     <div>This is profile {name}</div>
//   )
// };

// react hooks

// Lifecycle
//  - list of functions that gets called in sequence
// - component Lifecycle functions

// 1. constructor
// 2. render (also after setState is called)
// 3. componentDidMount

class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
      country: ''
    }
  }

  async componentDidMount() {
    const data = await fetch('https://api.com/user/1');
    this.setState({
      name: data.name,
      email: data.email,
      age: data.age,
      country: data.country
    })
  }

  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value
    });
  }

  // handleNameChange = (event) => {
  //   this.setState({
  //     name: event.target.value
  //   });
  // }

  // handleAgeChange = (event) => {
  //   this.setState({
  //     age: event.target.value
  //   });
  // }

  // handleEmailChange = (event) => {
  //   this.setState({
  //     email: event.target.value
  //   });
  // }

  handleSubmit = () => {
    console.log(this.state);
  }

  render () {
    return (
      <>
        <div>Name:
          <input
            type="text"
            name="name"
            onChange={(e) => {
              this.handleChange(e, 'name')
            }}
            value={this.state.name}
          />
        </div>
        <div>Age:
          <input
            type="text"
            name="age"
            onChange={(e) => {
              this.handleChange(e, 'age')
            }}
            value={this.state.age}
          />
        </div>
        <div>Email:
          <input
            type="text"
            name="email"
            onChange={(e) => {
              this.handleChange(e, 'email')
            }}
            value={this.state.email}
          />
        </div>
        <div>Country:
          <select
            onChange={(e) => {
              this.handleChange(e, 'country')
            }}
            value={this.state.country}
          >
            <option value="Nepal">Nepal</option>
            <option value="India">India</option>
            <option value="China">China</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    )
  }
}

export default Profile;


