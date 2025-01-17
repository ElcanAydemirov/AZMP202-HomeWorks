import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsByIdQuery } from '../../../redux/service'

const ProductDetail = () => {

    const { id } = useParams()
    const { data, isLoading, isError } = useGetProductsByIdQuery(id)
    console.log(data);
    return (
        <div>ProductDetail</div>
    )
}

export default ProductDetail