import React, { useState } from "react";
import {
  AutoComplete,
  Cascader,
  InputNumber,
  Select,
  Button,
  Checkbox,
  Form,
  Row,
  Col,
  Image,
  Input,
  Typography,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import imgRegister from "../../../assets/images/bg/registerbg.jpg";
import imgLogo from "../../../assets/images/bg/logo.png";
import "./AuthPage.scss";

const { Title } = Typography;
const { Option } = Select;

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
function Register() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+84</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Row>
      <Col span={4}></Col>
      <Col span={7}>
        <Image src={imgRegister} preview={false} />
      </Col>
      <Col span={1}></Col>
      <Col span={8}>
        <Row>
          <Col span={12}>
            <Image src={imgLogo} preview={false} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Title level={3} className="title-register">
              Đăng ký tài khoản
            </Title>
          </Col>
          <Col>
            <p className="intro-login">
              Giải pháp Blockchain truy xuất nguồn gốc theo chuỗi giá trị
            </p>
          </Col>
        </Row>
        <Row>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <div>Email</div>
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                  whitespace: true,
                },
              ]}
            >
              <div>Tên tài khoản</div>
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <div>Mật khẩu</div>
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <div>Nhập lại mật khẩu</div>
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="residence"
              label="Habitual Residence"
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Please select your habitual residence!",
                },
              ]}
            >
              <Cascader options={residences} />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
                <div>Số điện thoại</div>
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="website"
              label="Website"
              rules={[{ required: true, message: "Please input website!" }]}
            >
              <AutoComplete
                options={websiteOptions}
                onChange={onWebsiteChange}
                placeholder="website"
              >
                <Input />
              </AutoComplete>
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
}
export default Register;
