import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';

const Navigation = () => (
  <nav>
    <Menu mode="horizontal">
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about/">About</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/todo-list/">TodoList</Link>
      </Menu.Item>
    </Menu>
  </nav>
);

export default Navigation;
