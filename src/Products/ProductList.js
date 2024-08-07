import React, { Fragment, useEffect, useState } from 'react'
import Axios from 'axios';
import NoProducts from '../NoProducts/NoProducts';
const ProductList = () => {
  let [products, setProduct] = useState([])
  let [errMessage, setMessage] = useState("");
  useEffect(() => {
    let url = `https://basket-app-d7kp.onrender.com/api/products`;
    Axios.get(url)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        setMessage(err);
      })
  }, [])
  return <Fragment>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-10"></div>
      </div>
      <div className="row">
        {
          products.length > 0 ? <>
            {
              products.map((product) => {
                return <div className='col-md-3'>
                  <div className="card">
                    <div className="card-header">
                      <img src={product.image} width={100} height={100} />
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className='list-group-item'>{product.company}</li>
                        <li className='list-group-item'>{product.model}</li>
                        <li className='list-group-item'>{product.price}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              })
            }

          </> : <>
            <NoProducts />
          </>
        }

      </div>
    </div>
  </Fragment>
}

export default ProductList