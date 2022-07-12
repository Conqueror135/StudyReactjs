import React, { useState } from "react";
import { Button, Checkbox, Form, Row, Col, Image, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import imgBgLogin from "../../../assets/images/bg/bgLogin.png";
import imgLogo from "../../../assets/images/bg/logo.png";
import "./AuthPage.scss";

function Login() {
  return (
    <>
      <div className="space-top-login" />
      <Row gutter={[0, 100]}>
        <Col span={4}></Col>
        <Col span={7}>
          <Image src={imgBgLogin} preview={false} />
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
              <p className="intro-login">
                Giải pháp Blockchain truy xuất nguồn gốc theo chuỗi giá trị
              </p>
              <Row>
                <Col span={24}>
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                      remember: true,
                    }}
                  >
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Username!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Row>
                        <Col span={12}>
                          <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                          >
                            <Checkbox className="checkbox-red">
                              Remember me
                            </Checkbox>
                          </Form.Item>
                        </Col>
                        <Col span={12} className="login-forgot">
                          <a href="">Forgot password?</a>
                        </Col>
                      </Row>
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="btn-login login-form-button"
                        style={{
                          backgroundColor: "#54b862",
                          borderColor: "#54b862",
                          width: "100px",
                        }}
                        size={"large"}
                      >
                        Log in
                      </Button>
                    </Form.Item>
                    Or{" "}
                    <a href="" className="login-register">
                      register now!
                    </a>
                  </Form>
                </Col>
              </Row>{" "}
            </Col>
          </Row>
        </Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
}
export default Login;
