import React from 'react';

export const App = ({ groceries, onChangeValue, onSubmit, value }) => (
  <div>
    <form onSubmit={onSubmit}>
      <label>Grocery Name</label>
      <input onChange={onChangeValue} value={value} />
      <button type="submit">Add Grocery</button>
    </form>
    <ul>
      {groceries.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  </div>
);

export default App;
