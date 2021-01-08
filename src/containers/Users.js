import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

class Users extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    this.setState({
      data: data
    });
  }

  render() {
    const columns = [
      {
        name: 'Id',
        selector: 'id',
        sortable: true,
      },
      {
        name: 'Name',
        selector: 'name',
        sortable: true
      },
      {
        name: 'Username',
        selector: 'username',
        sortable: true,
      },
      {
        name: 'Email',
        selector: 'email',
        sortable: true,
      },
    ];
    return (
      <div className="data-table-wrapper">
        <DataTable
          title="User list"
          columns={columns}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default Users;