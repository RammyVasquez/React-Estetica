import React from 'react';
import { List, Table } from 'antd';

const MisVentas = (props) => {
      
      const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
          title: 'fecha',
          dataIndex: 'fecha',
          key: 'fecha',
        },
        {
          title: 'hora',
          dataIndex: 'hora',
          key: 'hora',
        },
        
      ];

    return(        
        // <List
        //     itemLayout="vertical"
        //     size="large"
        //     pagination={{
        //     onChange: page => {
        //         props.getMisVentasList(page)
        //     },
        //     pageSize: 20,
        //     total: props.totalResults 
        //     }}
        //     dataSource={props.data}
        //     renderItem={item => (
        //         <List.Item key={item.id}>
        //             <List.Item.Meta
        //                 title={<a href={`/MiVenta/${item.id}`}>Ticket {item.id}</a>}                   
        //             />
        //             <label><b> Día: </b></label> {item.fecha} <br/>
        //             <label><b> Hora: </b></label> {item.hora}<br></br>
        //             <label><b> Servicio: </b></label> {item.servicio}<br></br>
        //         </List.Item>
        //     )}
        // />

        <Table dataSource={props.data} columns={columns} />

    );
}
export default MisVentas; 