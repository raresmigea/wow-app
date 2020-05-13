import React from 'react';

function Table(props) {
  return (
    <div className='App'>
      <header className='App-header'>Table {props.index}</header>
      <button onClick={props.clickMe}>click!</button>
      <button onClick={props.clickHide}>click del!</button>
      <div>{props.variable}</div>
    </div>
  );
}

export default Table;
