import React, {Component} from 'react';
import axios from 'axios';
// import Venta from '../components/Venta';
import MisVentas from '../components/MisVentas';
// import FormServicio from '../components/FormServicio';

class MisVentasList extends Component {

    state = {
        Misventas: [],
        totalResults: 0
    }

    componentDidMount() {
      const urlVentas = 'http://estetik.herokuapp.com/api/venta';
      axios.get(urlVentas)
        .then(res => {
          this.setState({
            Misventas: res.data.ventas.data,
            totalResults: res.data.ventas.data.count
          })
      })
    }

    getMisVentasList = (page) => {
      const urlVentas = `http://estetik.herokuapp.com/api/venta/?page=${page}`;
      axios.get(urlVentas)
        .then(res => {
          this.setState({
            Misventas: res.data.ventas.data,
            totalResults: res.data.ventas.data.count
          })
      })
    }

    render() {
        return(
          <div>
            <MisVentas data={this.state.Misventas} totalResults={this.state.totalResults} getMisVentasList={this.getMisVentasList}/>
            <hr />
            {/* <h2>Create a Product</h2> */}
            {/* <FormServicio 
              requestType="post"
              id={null}
              btnText="Create"
            /> */}
          </div>
        );
    }
}

export default MisVentasList;