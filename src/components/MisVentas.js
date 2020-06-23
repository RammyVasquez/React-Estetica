import React from 'react';
import axios from 'axios';

import { List } from 'antd';

const MisVentas = (props) => {
    return(        
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                props.getMisVentasList(page)
            },
            pageSize: 20,
            total: props.totalResults 
            }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item key={item.id}>
                    <List.Item.Meta
                        title={<a href={`/MiVenta/${item.id}`}>Ticket {item.id}</a>}                   
                    />
                    <label><b> Día: </b></label> {item.fecha} <br/>
                    <label><b> Hora: </b></label> {item.hora}<br></br>
                    <label><b> Servicio: </b></label> {item.servicio}<br></br>
                </List.Item>
            )}
        />
    );
}
export default MisVentas; 