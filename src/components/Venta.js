import React from 'react';

import { List, Divider } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';



const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Venta = (props) => {
    return(
        
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                props.getVentasList(page)
            },
            pageSize: 3,
            total: props.totalResults 
            }}
            dataSource={props.data}
            renderItem={item => (
            <List.Item
                key={item.cve_venta}
            >
                <List.Item.Meta
                    title={<a href={`/venta/${item.cve_venta}`}>Venta {item.cve_venta}</a>}
                   
                />
                <label><b> Fecha: </b></label>{item.fecha}
                <label><b> Hora: </b></label>{item.hora}<br></br>
                <label><b> Total: </b></label>{item.total}<br></br>
                <label><b> Sub Total: </b></label>{item.subtotal}<br></br>
                <label><b> No. Transaccion: </b></label>{item.num_transaccion}<br></br>
                <label><b> Cve Cliente: </b> </label>{item.cve_cliente}<br></br>
                </List.Item>
            )}
        />
    );
}
export default Venta; 