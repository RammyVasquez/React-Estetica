import React from 'react';

import { List } from 'antd';

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Transporte = (props) => {
    return(
        
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                props.getTransporteList(page)
            },
            pageSize: 10,
            total: props.totalResults 
            }}
            dataSource={props.data}
            renderItem={item => (
            <List.Item
                key={item.id}
                extra={
                    <img
                        width={272}
                        height={272}
                        alt="logo"
                        src={item.url}
                    />
                    }
            >
                <List.Item.Meta
                    title={<a href={`/transporte/${item.id}`}>Clave: {item.id}</a>}
                    description={item.descripcion}
                />
                <label><b> Precio: </b></label>{item.precio}<br></br>
                <label><b> Marca: </b></label>{item.marca_vehiculo}<br></br>
                <label><b> Modelo: </b></label>{item.modelo_vehiculo}
                </List.Item>
            )}
        />
    );
}
export default Transporte; 