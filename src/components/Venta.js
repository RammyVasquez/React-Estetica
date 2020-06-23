import React from 'react';

import { List, Table } from 'antd';

const Venta = (props) => {

    const columns = [
        {
            title: 'cve_venta',
            dataIndex: 'cve_venta',
            key: 'cve_venta',
            sorter: (a, b) => a.cve_venta - b.cve_venta,
        },
        {
          title: 'Fecha agendada',
          dataIndex: 'fecha_agendada',
          key: 'fecha',
        },
        {
          title: 'Hora agendada',
          dataIndex: 'hora_agendada',
          key: 'hora',
        },
        {
            title: 'Servicio',
            dataIndex: 'nombre_Servicio',
            key: 'nombre_Servicio',
          },
          {
            title: 'Importe ($)',
            dataIndex: 'importe',
            key: 'importe',
            sorter: (a, b) => a.importe - b.importe,
          },
        
      ];

    return(
        
        // <List
        //     itemLayout="vertical"
        //     size="large"
        //     pagination={{
        //     onChange: page => {
        //         props.getVentasList(page)
        //     },
        //     pageSize: 30,
        //     total: props.totalResults 
        //     }}
        //     dataSource={props.data}
        //     renderItem={item => (
        //     <List.Item
        //         key={item.cve_venta}
        //     >
        //         <List.Item.Meta
        //             title={<a href={`/venta/${item.cve_detalle_venta}`}>Ticket {item.cve_detalle_venta}</a>}                  
        //         />
        //         <label><b> Fecha: </b></label> {item.fecha_agendada}<br></br>
        //         <label><b> Hora: </b></label> {item.hora_agendada}<br></br>
        //         <label><b> Nombre del servicio: </b></label> {item.nombre_Servicio}<br></br>
        //         <label><b> Cantidad: </b></label> {item.cantidad}<br></br>
        //         <label><b> Total: </b></label> ${item.importe}<br></br>
        //         </List.Item>
        //     )}
        // />

        <Table dataSource={props.data} columns={columns} />

    );
}
export default Venta; 