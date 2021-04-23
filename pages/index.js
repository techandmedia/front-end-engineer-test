import { Form, Card, Input, Row, Col } from "antd";

export default function Home() {
  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }
  function onFinish(value) {
    console.log("value", value);
  }

  return (
    <div className="site-card-border-less-wrapper">
      <Row gutter={12}>
        <Col span={12}>
          <Card title="Card Image" bordered={false} style={{ width: 500 }}>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Card Number"
                name="card"
                rules={[
                  { required: true, message: "Please input your card number!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Row gutter={12}>
                <Col span={12}>
                  <Form.Item
                    label="Expiration (mm/yy)"
                    name="card"
                    rules={[
                      {
                        required: true,
                        message: "Please input your expiration date!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Security Code"
                    name="card"
                    rules={[
                      {
                        required: true,
                        message: "Please input your security code!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Card Input" bordered={false} style={{ width: 500 }}>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Card Number"
                name="card"
                rules={[
                  { required: true, message: "Please input your card number!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Row gutter={12}>
                <Col span={12}>
                  <Form.Item
                    label="Expiration (mm/yy)"
                    name="card"
                    rules={[
                      {
                        required: true,
                        message: "Please input your expiration date!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Security Code"
                    name="card"
                    rules={[
                      {
                        required: true,
                        message: "Please input your security code!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
