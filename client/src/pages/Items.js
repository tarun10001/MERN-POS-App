import axios from "axios";
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Table, Modal, Form, Input, Select } from "antd";


function Items() {
  const [itemsData, setItemsData] = useState([]);
  const [addEditModalVisibility, setAddEditModalVisibility] = useState(false);

  const getAllItems = () => {
    axios
      .get("http://localhost:5000/api/items/get-all-items")
      .then((response) => {
        setItemsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt="" height="80" width="80" />
      ),
    },
    {
      title: "Price (₹)",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => (
        <div className="d-flex">
          <DeleteOutlined className="mx-2" />
          <EditOutlined className="mx-2" />
        </div>
      ),
    },
  ];

  const onFinish = (values) => {
    console.log(values)
  }


  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
        <h3>Items</h3>
        <Button type="primary" onClick={() => setAddEditModalVisibility(true)}>
          Add Item
        </Button>
      </div>
      <Table columns={columns} dataSource={itemsData} bordered />

      <Modal
        onCancel={() => setAddEditModalVisibility(false)}
        visible={addEditModalVisibility}
        title="Add New item"
        footer={false}
      >

        <Form layout="vertical" onFinish={onFinish}>

          <Form.Item name="name" label="Name" placeholder="Enter Name">
            <Input />
          </Form.Item>

          <Form.Item name="price" label="Price" placeholder="Enter price">
            <Input />
          </Form.Item>

          <Form.Item name="image" label="Image URL" placeholder="URL address">
            <Input />
          </Form.Item>

          <Form.Item name="category" label="Category">
            <Select>
              <Select.Option value="Electronics">Electronics</Select.Option>
              <Select.Option value="Furniture">Furniture</Select.Option>
              <Select.Option value="Mens-Shoes">Mens-Shoes</Select.Option>
            </Select>
          </Form.Item>

          <div className="d-flex justify-content-end">
            <Button htmlType="submit" type="primary">
              SAVE
            </Button>
          </div>
        </Form>
      </Modal>
    </DefaultLayout>
  );
}

export default Items;
