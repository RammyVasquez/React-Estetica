import React from 'react';

import { List } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';



const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Producto = (props) => {
    return(
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                props.getProductosList(page)
            },
            pageSize: 5,
            total: props.totalResults 
            }}
            dataSource={props.data}
            
            renderItem={item => (
            <List.Item
                key={item.nombre}
                actions={[
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
                extra={
                <img
                    width={150}
                    height={150}
                    alt="logo"
                    src={item.imagen}
                />
                }
            >
                <List.Item.Meta
                    title={<a href={`/producto/${item.id}`}>{item.nombre}</a>}
                    description={item.stock}
                />
                  {item.precio}
            </List.Item>
            )}
        />
    );
}
export default Producto; 