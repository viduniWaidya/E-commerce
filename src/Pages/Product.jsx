import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

function Product() {
  const {all_product}= useContext(ShopContext);
  const {ProductId} = useParams();
  const product = all_product.find((e)=> e.id === Number(ProductId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product= {product}/>
    </div>
  )
}

export default Product
