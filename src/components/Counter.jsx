import React from 'react';
import {Button} from 'antd';
import './Counter.less';

//const Search = Input.Search;

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.count = 0;
    this.state = {
      open: false,
      list: [1, 2, 3, 4, 5],
    };
  }

  handleClick = e => {
    const {list} = this.state;
    let num = Math.random() * 1000;
    num = Math.ceil(num);

    this.setState({
      list: list.filter((item, idx, arr) => {
        return item % 2 === 1;
      }),
    });
  };

  handleSearch = value => {
    console.log(value);
  };

  render() {
    console.log('render...');
    return (
      <div className="Counter">
        <header className="App-header">
          {this.state.list.map((item, idx) => {
            return <div key={`list-item-${idx}`}>{item}</div>;
          })}

          <Button onClick={this.handleClick}>카운터</Button>
        </header>
      </div>
    );
  }
}

export default Counter;
