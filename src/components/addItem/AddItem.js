import AdminNavbar from "../adminNavbar/AdminNavbar";
import { Form, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "react-bootstrap";

const AddItem = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <>
      <AdminNavbar />
      <div className="container my-4">
        <form>
          <div className="form-group">
            <label htmlFor="item1">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="item1"
              placeholder="Item Name"
            />
          </div>
          <div className="form-group my-4">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
            />
          </div>
          <label htmlFor="category">Category</label>
          <Select
            className="mx-4"
            showSearch
            placeholder="Select a Category"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "fruit",
                label: "fruit",
              },
              {
                value: "vegetable",
                label: "vegetable",
              },
            ]}
          />
          <Form.Item
            label="Add Image"
            valuePropName="fileList"
            className="my-4"
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Add Image
                </div>
              </div>
            </Upload>
          </Form.Item>
        </form>
        <Button>Upload</Button>
      </div>
    </>
  );
};

export default AddItem;
