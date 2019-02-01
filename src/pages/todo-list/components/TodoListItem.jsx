import React from 'react';
import {Checkbox, Icon} from 'antd';

class TodoListItem extends React.Component {
  render() {
    const {name, completed} = this.props;

    return (
      <div className="TodoListItem">
        <Checkbox checked={completed} onChange={this.props.onChangeSelect} />
        <span>{name}</span>

        <Icon type={'edit'} className={'btn btn-edit'} />
        <Icon
          type={'delete'}
          className={'btn btn-delete'}
          onClick={this.props.onDelete}
        />
      </div>
    );
  }
}

export default TodoListItem;
