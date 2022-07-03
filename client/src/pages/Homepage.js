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
const [selectedCategory, setSelectedCategory] = useState('Electronics');

const categories = [
  {
    name : 'Electronics',
    imageURL : 'https://rukminim1.flixcart.com/image/416/416/kruyw7k0/computer/f/i/u/na-thin-and-light-laptop-lenovo-original-imag5jy6fsm2yx4q.jpeg?q=70'
  },
  {
    name : 'Furniture',
    imageURL : 'https://rukminim1.flixcart.com/image/416/416/kppt47k0/portable-laptop-table/r/q/j/plywood-portable-laptop-table-smart-multipurpose-foldable-laptop-original-imag3w5zvz84qwgb.jpeg?q=70'
  },
  {
    name : 'Mens Shoes',
    imageURL : 'https://rukminim1.flixcart.com/image/880/1056/l407mvk0/shoe/a/m/o/-original-imagezy5hjbwsdkj.jpeg?q=50'
  }
]

  const getAllItems = () => {
dispatch({type : 'showLoading'})
    axios.get('/api/items/get-all-items')
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


          <div className="d-flex">
            {categories.map((category) => {
              return <div
              onClick={() => setSelectedCategory(category.name)}
              className={`d-flex category ${selectedCategory === category.name && 'selected-category'}`}>
                <h4>{category.name}</h4>
                <img src={category.imageURL} height='60' width='60' />
              </div>
            })}
          </div>

      <Row gutter={20}>
        {itemsData.filter((i) => i.category === selectedCategory).map((item) => {
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