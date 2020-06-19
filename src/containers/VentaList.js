import React, {Component} from 'react';
import axios from 'axios';
import Venta from '../components/Venta';
// import FormServicio from '../components/FormServicio';

class VentaList extends Component {

    state = {
        ventas: [],
        totalResults: 0
    }

    componentDidMount() {
      const urlServicio = 'https://apimascotasventas.azurewebsites.net/api/DetalleVentas/estetica';
      axios.get(urlServicio)
        .then(res => {
          this.setState({
            ventas: res.data,
            totalResults: res.data.count
          })
      })
    }

    getVentaList = (page) => {
      const urlServicio = `https://apimascotasventas.azurewebsites.net/api/DetalleVentas/estetica/?page=${page}`;
      axios.get(urlServicio)
        .then(res => {
          this.setState({
            ventas: res.data,
            totalResults: res.data.count
          })
      })
    }

    render() {
        return(
          <div>
            <h2>Detalle de venta proporcionado por "VENTAS"</h2>
            <Venta data={this.state.ventas} totalResults={this.state.totalResults} getVentaList={this.getVentaList}/>
            <hr />           
            {/* <FormServicio 
              requestType="post"
              id={null}
              btnText="Create"
            /> */}
          </div>
        );
    }
}

export default VentaList;