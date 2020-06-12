import React, {Component} from 'react';
import axios from 'axios';
import Servicio from '../components/Servicio';
import FormServicio from '../components/FormServicio';

class ServicioList extends Component {

    state = {
        servicios: [],
        totalResults: 0
    }

    componentDidMount() {
      const urlServicio = 'http://estetik.herokuapp.com/api/servicio';
      axios.get(urlServicio)
        .then(res => {
          this.setState({
            servicios: res.data.servicios.data,
            totalResults: res.data.servicios.data.count
          })
      })
    }

    getServicioList = (page) => {
      const urlServicio = `http://estetik.herokuapp.com/api/servicio/?page=${page}`;
      axios.get(urlServicio)
        .then(res => {
          this.setState({
            servicios: res.data.servicios.data,
            totalResults: res.data.servicios.data.count
          })
      })
    }

    render() {
        return(
          <div>
            <Servicio data={this.state.servicios} totalResults={this.state.totalResults} getServicioList={this.getServicioList}/>
            <hr />
            <h2>Create a Product</h2>
            <FormServicio 
              requestType="post"
              id={null}
              btnText="Create"
            />
          </div>
        );
    }
}

export default ServicioList;