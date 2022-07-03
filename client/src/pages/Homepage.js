import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import axios from "axios";
import { Col, Row, Select } from 'antd';
import Item from '../components/Item';
import '../resources/items.css'
import { Option } from 'antd/lib/mentions';
import { useDispatch } from 'react-redux';


function Homepage() {

  const [itemsData, setItemsData] = useState([]);
  const dispatch = useDispatch();

  const getAllItems = () => {
dispatch({type : 'showLoading'})
    axios.get('http://localhost:5000/api/items/get-all-items')
    .then((response) => {
      dispatch({type : 'hideLoading'})
  setItemsData(response.data)
  console.log(response.data)
    }).catch((error) => {
      dispatch({type : 'showLoading'})
  console.log(error);
    })
  }
  
  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <>
<DefaultLayout>

          {/* <h4>Sort Products:</h4>
          <Select>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select> */}

      <Row gutter={20}>
        {itemsData.map((item) => {
          return <Col xs={24} lg={6} md={12} sm={6} >
          <Item item={item} />
          </Col>          
        })}
        </Row>
        </DefaultLayout>
    </>
  )
}

export default Homepage;