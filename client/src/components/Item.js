import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../resources/items.css";


function Item({ item }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({ type: "addToCart", payload: {...item, quantity:1 }});
  };

  return (
    <div className="item">
      <h4 className="name">{item.name}</h4>
      <img
        className="imgg"
        src={item.image}
        height="100"
        width="100"
        center
        alt=""
      />

      <h4 className="price">
        <b>Price : </b>
        {item.price}$
      </h4>
      <h4 className="brand">
        <b>Category : </b>
        {item.category}
      </h4>

      <div className="d-flex justify-content-center">
        <Button onClick={() => addToCart()}>
          <div onClick={() => setIsModalVisible(true)}>Add to Cart</div>
        </Button>
      </div>

      <Modal visible={isModalVisible} onCancel={() => setIsModalVisible(false)} footer={false}>
       Product Added Successfully
      </Modal>

      {/* <Link style={{ color: "skyblue" }} to={`/products/${item.id}`}>
              </Link> */}

    </div>
  );
}


export default Item;
