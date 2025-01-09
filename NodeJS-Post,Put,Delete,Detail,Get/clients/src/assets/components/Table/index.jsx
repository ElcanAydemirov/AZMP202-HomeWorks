import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
const Table = () => {
    const BASE_URL = "http://localhost:8080"
    const [products, setProducts] = useState([])

    const getAllData = async () => {
        try {
            const response = await axios(`${BASE_URL}/products`)
            console.log(response.data.data);
            setProducts(response.data.data)


        } catch (error) {
            console.log(error);

        }
    }
const deleteBtn = async (pId) =>{
    try {
        const res =  await axios.delete(`${BASE_URL}/products/${pId}`)
        if (res.status===200) {
            setProducts([...products.filter((p)=>p.id !== pId)])
            
        } else {
            throw new Error("not such as data")
        }
    } catch (error) {
        console.log(error);
        
    }
}
    useEffect(() => {

        getAllData()

    }, [])

    return (
        <>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="number" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="number" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Category</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


        
        <br />
        <br />
        <br />

            <table className="table table-secondary">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map((p) => {
                            return (
                                <tr key={p.id}>
                                    <th scope="row">{p.title}</th>
                                    <td>{p.price}</td>
                                    <td>{p.description}</td>
                                    <td>{p.category}</td>
                                    <td>
                                        
                                        <button onClick={()=>{deleteBtn(p.id)}} className='btn btn-outline-danger'>
                                            
                                            
                                            Delete


                                        </button>
                                        
                                        </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default Table
