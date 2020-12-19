import React , { useContext }from 'react'
import { useParams } from "@reach/router"
import  AppContext   from '../context/AppContext';

const DetailService = () => {
  const { id } = useParams();
  const {state} = useContext(AppContext)
  const { products } = state;

  const details = products.filter((product, index) =>{
    return product.id === id
    
  })

  console.log(details)
  

return (
    <div>
      hola estamos en serivios
    </div>
  )
}

export default DetailService;
