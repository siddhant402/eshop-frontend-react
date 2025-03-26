import { useState } from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  const { id, name, image } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img src={image} alt="" className="card-top-img" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>

          <Link to="/products" class="btn btn-primary btn-block">
            Select
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Category;
