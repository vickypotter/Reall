import React from "react";
import { List, Avatar, Icon } from "antd";
import './Article.css';

const IconText = ({ type, text }) => (
  <span>
    <Icon
      type={type}
      style={{
        marginRight: 8
      }}
    />
    {text}
  </span>
);

const Articles = props => {
  return (
    <List
      className="eachPost"
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText type="star-o" text="0" />,
            <IconText type="like-o" text="0" />,
            <IconText type="message" text="0" />
          ]}
          extra={
            // <img
            //   width={272}
            //   alt="logo"
            //   // src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            // />
            ""
          }
        >
          <List.Item.Meta
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
            title={<a href={`/articles/${item.id}`}> {item.title} </a>}
            description={item.description}
            
          />
          {/* <Avatar>U</Avatar> */}
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Articles;
