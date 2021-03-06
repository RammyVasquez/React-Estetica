import React from 'react';

import { List } from 'antd';

// const IconText = ({ icon, text }) => (
//   <span>
//     {React.createElement(icon, { style: { marginRight: 8 } })}
//     {text}
//   </span>
// );

const Servicio = (props) => {
    return(
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                props.getServiciosList(page)
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
                    title={<a href={`/servicio/${item.id}`}>{item.nombre}</a>}
                    description={"$"+item.precio}
                />
                </List.Item>
            )}
        />
    );
}
export default Servicio; 