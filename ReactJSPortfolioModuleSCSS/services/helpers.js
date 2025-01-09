import axios from 'axios';
import { BASE_URL } from './constants';

//getAllData
const getAllData = async (endpoint) => {
    try {
      const res = await axios.get(`${BASE_URL}${endpoint}`);
      return res;
    } catch (error) {
      console.error('Error fetching all data:', error);
      throw error;
    }
  };
  
  // GET data by ID
  const getDataById = async (endpoint,id) => {
    try {
      const res = await axios.get(`${BASE_URL}${endpoint}/${id}`);
      return res.data;
    } catch (error) {
      console.error(`Error fetching data by ID (${id}):`, error);
      throw error;
    }
  };
  
  // POST (create) new data
  const createData = async (endpoint,data) => {
    try {
      const res = await axios.post(`${BASE_URL}${endpoint}`, data);
      return res.data;
    } catch (error) {
      console.error('Error creating new data:', error);
      throw error;
    }
  };
  
  // PUT (update) data by ID
  const updateData = async (endpoint,id, updatedData) => {
    try {
      const res = await axios.put(
        `${BASE_URL}${endpoint}/${id}`,
        updatedData
      );
      return res.data;
    } catch (error) {
      console.error(`Error updating data (${id}):`, error);
      throw error;
    }
  };
  
  // DELETE data by ID
 const deleteData = async (endpoint,id) => {
    try {
      const res = await axios.delete(`${BASE_URL}${endpoint}/${id}`);
      return res.data;
    } catch (error) {
      console.error(`Error deleting data (${id}):`, error);
      throw error;
    }
  };
  
  export { getAllData, getDataById, createData, updateData, deleteData };