import React from "react";
import { Table, Space } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import axios from "axios";

export default class TableMsg extends React.Component {
  constructor() {
    super();
    this.state = {
      columns: [],
      rows: [],
    };
  }

  componentDidMount() {
    this.handleReload();

    this.setState({
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          //   render: (text) => <a>{text}</a>,
        },
        {
          title: "Contact",
          dataIndex: "contact",
          key: "contact",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Message",
          key: "message",
          dataIndex: "message",
        },
        {
          title: "Date",
          key: "date",
          dataIndex: "date",
        },
        {
          title: "Action",
          key: "action",
          render: (text, record) => (
            <Space size="middle">
              <span>View</span>
              <span>Remove</span>
            </Space>
          ),
        },
      ],
    });
  }

  handleReload = () => {
    axios({
      async: true,
      crossDomain: true,
      url: "https://daniel-9dca.restdb.io/rest/messages",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": "608402fe28bf9b609975a617",
        "cache-control": "no-cache",
      },
    }).then((res) => {
      console.log(res.data);
      this.setState({
        rows: res.data,
      });
    });
  };

  render() {
    return (
      //   <div style={{ maxWidth: "100% !important" }}>
      <>
        <span>
          <ReloadOutlined
            onClick={this.handleReload}
            style={{ fontSize: "20px", margin: "5px" }}
          />
        </span>
        <Table
          columns={this.state.columns}
          dataSource={this.state.rows}
          scroll={{ x: 1300 }}
        />
      </>
      //   </div>
    );
  }
}
