import React from 'react';
import { useParams } from 'react-router-dom';
import DefalutLayout from '../components/DefaultLayout';


function ProductDetails() {

    const {id} =useParams()
  return (
<>
    <DefalutLayout />
    <div>ProductDetails</div> 
    </>
  )
}

export default ProductDetails;