import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.less';
import {Input, Button, Icon} from 'antd';

class TodoList extends React.Component {
  handleEnterTodoText = e => {
    this.props.onCreate(e.target.value);
  };

  handleChangeComplteItem = (item, index, value) => {
    item.completed = value;
    this.props.onChangeComplete(index, item);
  };

  render() {
    const {items} = this.props;

    return (
      <div className="TodoList">
        <div>
          <Input
            onPressEnter={this.handleEnterTodoText}
            addonAfter={<Icon type="plus" />}
          />
        </div>

        <div>
          {items.map((item, index) => {
            return (
              <TodoListItem
                key={`item-${index}`}
                {...item}
                onDelete={e => this.props.onDelete(index)}
                onChangeSelect={e =>
                  this.handleChangeComplteItem(item, index, e.target.checked)
                }
              />
            );
          })}
        </div>

        <div className={'footer'}>
          <Button>전체선택</Button>

          <div>
            <span>할일 {items.filter(item => !item.completed).length}</span>
            <span>완료 {items.filter(item => item.completed).length}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
