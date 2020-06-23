import React, {Component} from 'react';
import axios from 'axios';
// import Venta from '../components/Venta';
import MisVentas from '../components/MisVentas';
// import FormServicio from '../components/FormServicio';

class MisVentasList extends Component {

    state = {
        Misventas: [],
        total: [],
        totalResults: 0
    }

    componentDidMount() {
      const urlVentas = 'http://estetik.herokuapp.com/api/cita';
      axios.get(urlVentas)
        .then(res => {
          this.setState({
            Misventas: res.data.citas.data,
            totalResults: res.data.citas.data.count
          })
      })
    }

    getMisVentasList = (page) => {
      const urlVentas = `http://estetik.herokuapp.com/api/cita/?page=${page}`;
      axios.get(urlVentas)
        .then(res => {
          this.setState({
            Misventas: res.data.citas.data,
            totalResults: res.data.citas.data.count
          })
      })
    }

    render() {
        return(
          <div>
            <h2>Mis ventas realizadas</h2>
            <MisVentas data={this.state.Misventas} totalResults={this.state.totalResults} />
            <hr />
          </div>
        );
    }
}

export default MisVentasList;