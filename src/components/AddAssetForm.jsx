import { useContext, useState, useRef } from 'react';

import {
  Select,
  Space,
  Typography,
  Flex,
  Divider,
  Form,
  Input,
  Button,
  InputNumber,
  DatePicker,
  Result,
} from 'antd';

import CryptoContext from './../context/crypto-context';
import CoinInfo from './CoinInfo';

export default function AddAssetForm({ onClose }) {
  const [coin, setCoin] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const { crypto, addAsset } = useContext(CryptoContext);
  const [form] = Form.useForm();
  const assetRef = useRef();

  console.log(crypto);

  if (submitted) {
    return (
      <Result
        status="success"
        title="New asset Added"
        subTitle={`Added ${assetRef.current.amount} of ${coin.name} by price ${assetRef.current.price}`}
        extra={[
          <Button type="primary" key="console" onClick={onClose}>
            Close
          </Button>,
        ]}
      />
    );
  }

  if (!coin) {
    return (
      <Select
        style={{ width: '100%' }}
        onSelect={(value) => setCoin(crypto.find((item) => item.id == value))}
        placeholder="Select coin"
        options={crypto.map((item) => ({
          ...item,
          label: item.name,
          value: item.id,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              src={option.data.icon}
              alt={option.data.label}
              width={20}
              height={20}
            />
            {option.data.label}
          </Space>
        )}
      />
    );
  }

  function onFinish(values) {
    const newAsset = {
      id: coin.id,
      amount: values.amount,
      price: values.price,
      date: values.date?.$d ?? new Date(),
    };
    assetRef.current = newAsset;
    addAsset(newAsset);
    setSubmitted(true);
  }

  function handleAmountChange(value) {
    const price = form.getFieldValue('price');
    form.setFieldsValue({
      total: +(value * price).toFixed(2),
    });
  }

  function handlePriceChange(value) {
    const amount = form.getFieldValue('amount');
    form.setFieldsValue({
      total: +(amount * value).toFixed(2),
    });
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 10,
      }}
      style={{
        maxWidth: '100%',
      }}
      initialValues={{
        price: +coin.price.toFixed(2),
      }}
      onFinish={onFinish}
    >
      <CoinInfo
        coin={coin}
        hasButton={true}
        buttonFunction={() => setCoin(false)}
      />
      <Divider />

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            type: 'number',
            min: 0,
            message: 'Amount in not valid number',
          },
        ]}
      >
        <InputNumber
          style={{ width: '100%' }}
          placeholder="Enter coin amount"
          onChange={handleAmountChange}
        />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            type: 'number',
            min: 0,
            message: 'Amount in not valid number',
          },
        ]}
      >
        <InputNumber style={{ width: '100%' }} onChange={handlePriceChange} />
      </Form.Item>
      <Form.Item label="Date & time" name="date">
        <DatePicker showTime />
      </Form.Item>
      <Form.Item label="Total" name="total">
        <InputNumber disabled style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Add asset
        </Button>
      </Form.Item>
    </Form>
  );
}
