import { Col, Row, Table } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import {DeleteOutlined, PlusCircleOutlined, MinusCircleOutlined} from '@ant-design/icons';


function CartPage() {

  const {cartItems} = useSelector(state => state.reducer);
  const dispatch = useDispatch();

 const increaseQuantity = (record) => {
  dispatch({
  type : 'updateCart', 
  payload : {...record, quantity : record.quantity + 1},
 })
 }

 const decreaseQuantity = (record) => {
  if (record.quantity !== 1) {
    dispatch({
      type : 'updateCart', 
      payload : {...record, quantity : record.quantity +- 1},
     })
  }
 }

    const columns = [
        {
            title : 'Name',
            dataIndex : 'name',
        },
        {
            title : 'Image',
            dataIndex :'image',
            render : (image, record) => <img src={image} alt="" height="80" width="80" />
        },
        {
            title : 'Price (₹)',
            dataIndex : 'price'
        },
        {
          title : 'Quantity',
          datIndex : '_id',
          render : (id, record) => <div>               
           <MinusCircleOutlined className="mx-3" onClick={() => decreaseQuantity(record)} />
           <b>{record.quantity}</b>
            <PlusCircleOutlined className="mx-3" onClick={() => increaseQuantity(record)} />
          </div>
        }, 
        {
          title : "actions",
          dataIndex : '_id',
          render : (id, record) => <DeleteOutlined onClick={() => dispatch({type : 'deleteFromCart', payload : record})} />
        }
    ]

  return (

    <DefaultLayout>
          <Table columns={columns} dataSource={cartItems} bordered />
        </DefaultLayout>
  )
}

export default CartPage;