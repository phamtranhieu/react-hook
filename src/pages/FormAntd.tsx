import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./FormAntd.scss";
import { Form, Input, Button, Checkbox, Select, DatePicker, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Moment from "react-moment";
import moment from "moment";
const { Option } = Select;

export default function FormAntd() {
  const onFinish = (values: any) => {
    const formValue = {
      id: values.id,
      no: values.no,
      name: values.name,
      type: {
        value: values.type,
      },
      applyTransaction: {
        value: values.applyTransaction,
      },
      applySalesAgent: {
        value: values.applySalesAgent,
      },
      applyRanks: [
        {
          value: values.applyRanks,
        },
      ],
      promotionCondition: {
        value: values.promotionCondition,
      },
      limitOrder: values.limitOrder,
      minAmountApply: values.minAmountApply,
      promotionPercent: values.promotionPercent,
      createdAt: moment(values.createdAt).format("DD/MM/YYYY h:mm:ss"),
      dateFrom: moment(values.dateFrom).valueOf(),
      dateTo: moment(values.dateTo).valueOf(),
      realDateTo: moment(values.realDateTo).toISOString(),
      salesPromotionItems: (values.salesPromotionItems ?? []).map(
        (item: any, index: number) => {
          return {
            sortOrder: index,
            no: item.no,
            productId: item.productId,
            promotionPercent: item.promotionPercent,
          };
        }
      ),
    };
    console.log(formValue);
  };
  return (
    <div className="form-sales">
      <div className="title-sale">
        <h1>TẠO MỚI CHƯƠNG TRÌNH KHUYẾN MÃI</h1>
        <button>Hủy thao tác</button>
      </div>
      <Form
        // className="form"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="form">
          <div className="form-left">
            <Form.Item
              label="Mã CTKM"
              name="id"
              rules={[
                { required: true, message: "Vui lòng nhập mã khuyến mãi!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Tên CTKM"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên chương trình khuyến mãi!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Loại CTKM"
              name="type"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập loại chương trình khuyến mãi!",
                },
              ]}
            >
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="Search to Select"
                optionFilterProp="children"
                // filterOption={(input, option) =>
                //   (option!.children as unknown as string).includes(input)
                // }
                // filterSort={(optionA, optionB) =>
                //   (optionA!.children as unknown as string)
                //     .toLowerCase()
                //     .localeCompare(
                //       (optionB!.children as unknown as string).toLowerCase()
                //     )
                // }
              >
                <Option value="number 1">Not Identified</Option>
                <Option value="number 2">Closed</Option>
                <Option value="number 3">Communicated</Option>
                <Option value="number 4">Identified</Option>
                <Option value="number 5">Resolved</Option>
                <Option value="number 6">Cancelled</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Giao dịch áp dụng"
              name="applyTransaction"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập giao dịch áp dụng !",
                },
              ]}
            >
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="Search to Select"
                optionFilterProp="children"
                // filterOption={(input, option) =>
                //   (option!.children as unknown as string).includes(input)
                // }
                // filterSort={(optionA, optionB) =>
                //   (optionA!.children as unknown as string)
                //     .toLowerCase()
                //     .localeCompare(
                //       (optionB!.children as unknown as string).toLowerCase()
                //     )
                // }
              >
                <Option value="number 11">Not Identified</Option>
                <Option value="number 12">Closed</Option>
                <Option value="number 13">Communicated</Option>
                <Option value="number 14">Identified</Option>
                <Option value="number 15">Resolved</Option>
                <Option value="number 16">Cancelled</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Đối tượng đại lý"
              name="applySalesAgent"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập đối tượng đại lý!",
                },
              ]}
            >
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="Search to Select"
                optionFilterProp="children"
                // filterOption={(input, option) =>
                //   (option!.children as unknown as string).includes(input)
                // }
                // filterSort={(optionA, optionB) =>
                //   (optionA!.children as unknown as string)
                //     .toLowerCase()
                //     .localeCompare(
                //       (optionB!.children as unknown as string).toLowerCase()
                //     )
                // }
              >
                <Option value="number 21">Not Identified</Option>
                <Option value="number 22">Closed</Option>
                <Option value="number 23">Communicated</Option>
                <Option value="number 24">Identified</Option>
                <Option value="number 25">Resolved</Option>
                <Option value="number 26">Cancelled</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Hạng đại lý"
              name="applyRanks"
              rules={[{ required: true, message: "Nhập hạng đại lý!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Điều kiện khuyến mãi"
              name="promotionCondition"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập Điều kiện khuyến mãi!",
                },
              ]}
            >
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="Search to Select"
                optionFilterProp="children"
                // filterOption={(input, option) =>
                //   (option!.children as unknown as string).includes(input)
                // }
                // filterSort={(optionA, optionB) =>
                //   (optionA!.children as unknown as string)
                //     .toLowerCase()
                //     .localeCompare(
                //       (optionB!.children as unknown as string).toLowerCase()
                //     )
                // }
              >
                <Option value="number 31">Not Identified</Option>
                <Option value="number 32">Closed</Option>
                <Option value="number 33">Communicated</Option>
                <Option value="number 34">Identified</Option>
                <Option value="number 35">Resolved</Option>
                <Option value="number 36">Cancelled</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Số đơn tối đa được áp dụng"
              name="limitOrder"
              rules={[
                { required: true, message: "Số đơn tối đa được áp dụng!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Số tiền tối thiểu"
              name="minAmountApply"
              rules={[{ required: true, message: "Nhập số tiền tối thiểu!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="% khuyến mãi"
              name="promotionPercent"
              rules={[
                { required: true, message: "Nhập phần trăm khuyến mãi!" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="form-right">
            <Form.Item
              label="Trạng thái"
              name="no"
              rules={[{ required: true, message: "Nhập trạng thái!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Ngày tạo"
              name="createdAt"
              rules={[{ required: true, message: "Nhập ngày tạo !" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Người taọ"
              name="people"
              rules={[{ required: true, message: "Tên người tạo !" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Hiệu lực từ ngày"
              name="dateFrom"
              rules={[{ required: true, message: "Hiệu lực từ ngày!" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Hiệu lực đến ngày"
              name="dateTo"
              rules={[{ required: true, message: "Hiệu lực đến ngày !" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Hiệu lực đến ngày ( thực tế )"
              name="realDateTo"
              rules={[
                { required: true, message: "Hiệu lực đến ngày ( thực tế )" },
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Ghi chú"
              name="note"
              rules={[{ required: true, message: "Nhập ghi chú !" }]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <h4 style={{ textAlign: "left" }}>Chi tiết sản phẩm khuyến mãi (*)</h4>
        <Form.List name="salesPromotionItems">
          {(fields, { add, remove }, { errors }) => (
            <div className="form-product">
              <div className="title-product">
                <span>STT</span>
                <span>Mã sản phẩm</span>
                <span>Tên sản phẩm</span>
                <span>% khuyến mãi</span>
                <span>Thao tác</span>
              </div>
              {fields.map(({ key, name, ...restField }, index) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                  className="detail-product"
                >
                  <span>{index + 1}</span>
                  <Form.Item
                    {...restField}
                    name={[name, "no"]}
                    rules={[{ required: true, message: "Nhập mã CTKM" }]}
                  >
                    <Input placeholder="Mã sản phẩm" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "productId"]}
                    rules={[{ required: true, message: "Missing last name" }]}
                  >
                    <Input placeholder="Tên sản phẩm" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "promotionPercent"]}
                    rules={[{ required: true, message: "Missing last name" }]}
                  >
                    <Input placeholder="Khuyến mãi" />
                  </Form.Item>

                  <div>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </div>
                </Space>
              ))}
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
                className="button-add"
              >
                Add field
              </Button>
            </div>
          )}
        </Form.List>
        <div className="ant-col ant-col-24 ant-form-item-control">
          <Form.Item className=" button-submit">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
