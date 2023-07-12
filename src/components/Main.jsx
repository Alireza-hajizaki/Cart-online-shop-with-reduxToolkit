import React from 'react'
import { useGetAllProductsQuery } from '../Redux/slices/productsApi'

const Main = () => {

  const{ data, error , isLoading } = useGetAllProductsQuery()

  return (
    <div>Main</div>
  )
}

export default Main