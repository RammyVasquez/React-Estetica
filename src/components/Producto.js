import React from 'react';

import { List } from 'antd';

// const IconText = ({ icon, text }) => (
//   <span>
//     {React.createElement(icon, { style: { marginRight: 8 } })}
//     {text}
//   </span>
// );

const Producto = (props) => {
    return(
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                props.getProductosList(page)
            },
            pageSize: 10,
            total: props.totalResults 
            }}
            dataSource={props.data}
            
            renderItem={item => (
            <List.Item
                key={item.nombre}
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
                    description={item.stock + " en stock"}
                />
                {"$"+item.precio}
            </List.Item>
            )}
        />
    );
}
export default Producto; 