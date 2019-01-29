import React from 'react';

const Todos = (props) => {

  const { title, items } = props;


  return (
    <div className="Todos" style={{backgroundColor: '#ccc'}}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => {
          return <li key={index}><input type="checkbox" defaultChecked={item.completed}/>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
