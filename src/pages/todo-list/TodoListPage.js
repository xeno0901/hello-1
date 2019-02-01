import React from 'react';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

class TodoListPage extends React.Component {
  constructor(props) {
    super(props);

    const todo = localStorage.getItem('todos');

    this.state = {
      items: JSON.parse(todo) || [],
    };
  }
  componentWillUnmount() {
    localStorage.setItem('todos', JSON.stringify(this.state.items));
  }

  handleChangeComplete = (idx, item) => {
    const {items} = this.state;
    items[idx] = item;

    this.setState({
      items: [...items],
    });
  };

  handleAddItem = text => {
    this.setState(prevState => {
      const items = [...prevState.items, {name: text, completed: false}];

      localStorage.setItem('todos', JSON.stringify(items));
      return {
        items,
      };
    });
  };
  render() {
    return (
      <Page>
        <TodoList
          items={this.state.items}
          onAddTodo={this.handleAddItem}
          onChangeComplete={this.handleChangeComplete}
        />
      </Page>
    );
  }
}

export default TodoListPage;
