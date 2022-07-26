import axios from "axios";
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Table, Modal, Form, Input, Select, message } from "antd";
import { useDispatch } from "react-redux";


function Bills() {

  const [billsData, setBillsData] = useState([]);
  const [addEditModalVisibility, setAddEditModalVisibility] = useState(false);
  const dispatch = useDispatch();


  const getAllBills = () => {
    dispatch({type : "showLoading"});
    axios
      .get("/api/bills/get-all-bills")
      .then((response) => {
        dispatch({ type: "hideLoading" });
        setBillsData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        dispatch({ type: "hideLoading" });
        console.log(error);
      });
  };


  useEffect(() => {
    getAllBills();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Customer",
      dataIndex: "customerName",
    },
    {
      title: "SubTotal",
      dataIndex: "subTotal",
    },
    {
      title: "GST",
      dataIndex: "gst",
    },
    {
      title: "Total",
      dataIndex: "totalAmount",
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => (
        <div className="d-flex">
          <EyeOutlined
            className="mx-2"
            onClick={() => {
              // setEditingItem(record);
              setAddEditModalVisibility(true);
            }}
          />
        </div>
      ),
    }, 
  ];


  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
        <h3>Items</h3>
        <Button type="primary" onClick={() => setAddEditModalVisibility(true)}>
          Add Item
        </Button>
      </div>
      <Table columns={columns} dataSource={billsData} bordered />


      {addEditModalVisibility && (
        <Modal
          onCancel={() => {
            // setEditingItem(null)
            setAddEditModalVisibility(false)
          }}
          visible={addEditModalVisibility}
          // title={`${editingItem !== null ? 'Edit Item' : 'Add New Item'}`}
          footer={false}
        >
          
        </Modal>
      )}
    </DefaultLayout>
  );
}


export default Bills;