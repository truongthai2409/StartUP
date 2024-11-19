import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Customer } from "types/admin/admin.type";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Space,
  Popconfirm,
  notification,
} from "antd";


const initialCustomers: Customer[] = [
  {
    key: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    code: "C001",
    phone: "123456789",
    address: "123 Main St",
  },
  {
    key: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    code: "C002",
    phone: "987654321",
    address: "456 Elm St",
  },
];

const CustomerPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editCustomer, setEditCustomer] = useState<Customer | null>(null);
  const [form] = Form.useForm();

  const showModal = (customer?: Customer) => {
    if (customer) {
      setEditCustomer(customer);
      form.setFieldsValue(customer);
    } else {
      setEditCustomer(null);
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editCustomer) {
          // Update customer
          setCustomers((prev) =>
            prev.map((customer) =>
              customer.key === editCustomer.key
                ? { ...customer, ...values }
                : customer
            )
          );
        } else {
          // Add new customer
          setCustomers((prev) => [
            ...prev,
            { ...values, key: `${prev.length + 1}` },
          ]);
        }
        setIsModalVisible(false);
        notification.success({ message: "Customer saved successfully" });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = (key: string) => {
    setCustomers(customers.filter((customer) => customer.key !== key));
    notification.success({ message: "Customer deleted successfully" });
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Code", dataIndex: "code", key: "code" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Customer) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => showModal(record)} />
          <Popconfirm
            title="Are you sure to delete this customer?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        onClick={() => showModal()}
        style={{ marginBottom: 16 }}
      >
        Add Customer
      </Button>
      <Table columns={columns} dataSource={customers} />
      <Modal
        title={editCustomer ? "Edit Customer" : "Add Customer"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical" name="customerForm">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter the email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="code"
            label="Code"
            rules={[{ required: true, message: "Please enter the code!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              { required: true, message: "Please enter the phone number!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Address">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CustomerPage;
