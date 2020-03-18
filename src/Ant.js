import React from 'react';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
import './Ant.css';
import Panel from './component/panel/Panel'
import Flex from './component/flex/Flex'
import LayoutPanel from './component/layout/LayoutPanel'
const { Option } = Select;

const Ant = () => (
  <>
    <section style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Ant Design</h1>
      <img style={{ width: '40px', height: '40px' }} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
    </section> */}
    <Form style={{ marginTop: 30 }}>
       <Form.Item
        label="number imput"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <InputNumber min={1} max={10} defaultValue={3} />
        <span className="ant-form-text"> machain</span>
        <a href="https://ant.design">link</a>
      </Form.Item>
      <Form.Item
        label="switch"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item
        label="slide selecter"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Slider defaultValue={70} />
      </Form.Item>
      <Form.Item
        label="selecter"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Select defaultValue="lucy" style={{ width: 192 }}>
          <Option value="jack">aa</Option>
          <Option value="lucy">bb</Option>
          <Option value="disabled" disabled>disabled</Option>
          <Option value="yiminghe">yy</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="date selecter"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item>

      </Form.Item>
      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Button type="primary" htmlType="submit" className='comfirm-button'>
          comfire
        </Button>
        <Button type="danger" shape="round" htmlType="submit">
          caution
        </Button>
        <Button style={{ marginLeft: 8 }}>
          cancle
        </Button>
      </Form.Item> 
       <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Panel></Panel>
      </Form.Item> 
    </Form>
     <Flex></Flex> 
    <LayoutPanel></LayoutPanel>
  </>
);

export default Ant;
