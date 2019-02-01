import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.less';
import {Input, Button, Icon} from 'antd';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        completed: PropTypes.bool,
      })
    ).isRequired,
    onUnselectAll: PropTypes.func,
  };

  handleEnterTodoText = e => {
    this.props.onCreate(e.target.value);
  };

  handleChangeComplteItem = (item, index, value) => {
    item.completed = value;
    this.props.onChangeComplete(index, item);
  };

  render() {
    const {items} = this.props;
    const isSelectedAll = items.every(({completed}) => completed);

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
          {isSelectedAll ? (
            <Button onClick={this.props.onUnselectAll}>선택해제</Button>
          ) : (
            <Button onClick={this.props.onSelectAll}>전체선택</Button>
          )}

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
