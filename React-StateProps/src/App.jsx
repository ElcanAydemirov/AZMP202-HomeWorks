import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import Button from './components/Button';
import SearchBar from './components/searchbar';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('tasks'));
    if (savedData) setData(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }, [data]);

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        data={data}
        setFilteredData={setFilteredData}
      />
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
          data={filteredData.length > 0 || searchQuery ? filteredData : data}
          setData={setData}
        />

      </div>
    </>
  );
}

export default App;
