import React from 'react'

import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../redux/features/basketslice';

const Basket = () => {

    const basket = useSelector((state) => state.basket.basket)
    console.log(basket);
    const dispatch = useDispatch()
    return (
        <>
        <div className="container">
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>imageUrl</th>
          <th>title</th>
          <th>description</th>
          <th>price</th>
          <th>+</th>
          <th>Quantity</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        {basket && basket.map((b) => {
            return(
                <tr>
                <th><img src={b.imageUrl} alt="" /></th>
                <th>{b.title}</th>
                <th>{b.description}</th>
                <th>{b.price}</th>
                <th><button onClick={() => dispatch(increment(b._id))}>+</button></th>
                <th>{b.quantity}</th>
                <th><button onClick={() => dispatch(decrement(b._id))}>-</button></th>
                        </tr>
            )

        })}


      </tbody>
    </Table>
        </div>

        </>
    )
}

export default Basket