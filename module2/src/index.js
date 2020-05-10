import React, { Component } from 'react';
import { render } from 'react-dom';
//import PropTypes from 'prop-types';

const root = document.getElementById('root');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        id: 1,
        title: 'Learn React',
        category: {
          id: 1,
          name: 'Programming'
        }
      }
    }
  }

  changeTitleHander = () => {
    this.setState(() => ({
      todo: Object.assign({}, this.state.todo, { title: "Learn Redux"})
    }))
  }

  changeCategoryHandler = () => {
    const updatedCategory = {category: {name: "Personal"}};
    this.setState({
      todo: Object.assign({}, this.state.todo, updatedCategory)
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.todo.title}</h3>
        <p>Category: {this.state.todo.category.name}</p>
        <button onClick={this.changeTitleHander}>Change Title</button>
        <button onClick={this.changeCategoryHandler}>Change category</button>
      </div>
    )
  }
}

render(<App />, root)