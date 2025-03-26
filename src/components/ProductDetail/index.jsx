import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import styles from './styles.modules.css';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const {id} = useParams()

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <img src={product.images} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <h5 class="card-title">{product.title}</h5>

            <p class="card-text">
              <span class="badge badge-secondary">{product.category?.name}</span>
            </p>
            <p>
                {product.description}
            </p>
            <h2>
              {" "}
              <span>&#8377;</span> {product.price}
            </h2>
            <a href="#" class="btn btn-primary">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
