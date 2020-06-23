import React from 'react';

import { List } from 'antd';

const Venta = (props) => {
    return(
        
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                props.getVentasList(page)
            },
            pageSize: 30,
            total: props.totalResults 
            }}
            dataSource={props.data}
            renderItem={item => (
            <List.Item
                key={item.cve_venta}
            >
                <List.Item.Meta
                    title={<a href={`/venta/${item.cve_detalle_venta}`}>Ticket {item.cve_detalle_venta}</a>}                  
                />
                <label><b> Fecha: </b></label> {item.fecha_agendada}<br></br>
                <label><b> Hora: </b></label> {item.hora_agendada}<br></br>
                <label><b> Nombre del servicio: </b></label> {item.nombre_Servicio}<br></br>
                <label><b> Cantidad: </b></label> {item.cantidad}<br></br>
                <label><b> Total: </b></label> ${item.importe}<br></br>
                </List.Item>
            )}
        />
    );
}
export default Venta; 