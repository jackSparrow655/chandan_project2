
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { EyeOutlined } from "@ant-design/icons";
import { Table, Modal, Spin } from "antd";
import DefaultLayout from "../components/DefaultLayout";
import url from './url'

const BillsPage = () => {
  const dispatch = useDispatch();
  const [billsData, setBillsData] = useState([]);
  const [popupModal, setPopupModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const loading = useSelector((state) => state.loading);

  const getAllBills = async () => {
    try {
      dispatch({ type: "SHOW_LOADING" });
      const { data } = await axios.get(`${url}/api/bills/get-bills`);
      setBillsData(data);
      dispatch({ type: "HIDE_LOADING" });
    } catch (error) {
      dispatch({ type: "HIDE_LOADING" });
    //   console.log("Error fetching bills:", error);
    }
  };

  useEffect(() => {
    getAllBills();
  }, []); // Only fetch bills on component mount

  const openBillDetailsModal = (record) => {
    setSelectedBill(record);
    setPopupModal(true);
  };

  const columns = [
    { title: "ID", dataIndex: "_id" },
    { title: "Customer Name", dataIndex: "customerName" },
    { title: "Contact No", dataIndex: "customerNumber" },
    { title: "Sum Total", dataIndex: "sumTotal" },
    { title: "Total Amount", dataIndex: "totalAmount" },
    { title: "Tax", dataIndex: "tax" },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <EyeOutlined
          style={{ cursor: "pointer" }}
          onClick={() => openBillDetailsModal(record)}
        />
      ),
    },
  ];

  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
        <h1>Invoice List</h1>
        {loading && <Spin />} {/* Show loading spinner when fetching data */}
      </div>
      <Table columns={columns} dataSource={billsData} bordered />
      <Modal
        title="Invoice Details"
        open={popupModal}
        onCancel={() => setPopupModal(false)}
        footer={null}
      >
        {selectedBill && (
          <div>
            <p>ID: {selectedBill._id}</p>
            <p>Customer Name: {selectedBill.customerName}</p>
            {/* Display other details as needed */}
          </div>
        )}
      </Modal>
    </DefaultLayout>
  );
};

export default BillsPage;
