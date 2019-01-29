import React from 'react';
import ReactDOM from 'react-dom';

const FunctionalComponent = () => (
  <div>
    <h1 class="box">함수형 컴포전트</h1>
    <h2>현재 시간은? {new Date().toLocaleTimeString()}</h2>
  </div>
);

class StatelessComponent extends React.Component {
  render() {
    return (
      <div class="box2">
        <h1>상태가 없는 클래스형 컴포넌트</h1>
        <h2>현재 시간은? {new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}

class StatefullComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date().toLocaleTimeString(),
    };

    setTimeout(() => {
      this.setState({
        now: new Date().toLocaleTimeString(),
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        <h1>상태가 있는 클래스형 컴포넌트</h1>
        <h2>현재시간은? {this.state.now}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <FunctionalComponent />
    <StatelessComponent />
    <StatefullComponent />
  </div>,
  document.getElementById('root')
);
