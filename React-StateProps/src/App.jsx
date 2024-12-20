import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import Button from './components/Button';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <>
      <Form btnName={"Add"} setData={setData} data={data} />
      <hr />
      <div className="btns">
        <Button
          cName={"btn primary"}
          btnText={"allTodos"}
          data={data}
          setFilteredData={setFilteredData}
        />
        <Button
          cName={"btn success"}
          btnText={"allCompletedTodos"}
          data={data}
          setFilteredData={setFilteredData}
        />
        <Button
          cName={"btn warning"}
          btnText={"allPendingTodos"}
          data={data}
          setFilteredData={setFilteredData}
        />
        <Button
          cName={"btn danger"}
          btnText={"clearAll"}
          data={data}
          setData={setData}
          setFilteredData={setFilteredData}
        />
      </div>
      <div className="list">
        <List
          data={filteredData.length > 0 ? filteredData : data}
          setData={setData}
        />
      </div>
    </>
  );
}

export default App;
