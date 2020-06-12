import React from 'react';

import { List } from 'antd';



const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const MisVentas = (props) => {
    return(
        
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                props.getMisVentasList(page)
            },
            pageSize: 3,
            total: props.totalResults 
            }}
            dataSource={props.data}
            renderItem={item => (
            <List.Item
                key={item.id}
            >
                <List.Item.Meta
                    title={<a href={`/MiVenta/${item.id}`}>Clave Estetica {item.id}</a>}
                   
                />
                <label><b> Fecha: </b></label>{item.fecha}
                <label><b> Hora: </b></label>{item.hora}<br></br>
                <label><b> Total: </b></label>{item.total}<br></br>
                <label><b> Origen: </b></label>{item.origen}<br></br>
                <label><b> Sub Total: </b></label>{item.subtotal}<br></br>
                <label><b> No. Transaccion: </b></label>{item.no_transaccion}<br></br>
                <label><b> Cve Empleado: </b> </label>{item.id_empleado}<br></br>
                <label><b> Cve Cliente: </b> </label>{item.id_cliente}<br></br>
                </List.Item>
            )}
        />
    );
}
export default MisVentas; 