import React, {Component} from 'react';
import axios from 'axios';
import Producto from '../components/Producto';
import CustomForm from '../components/Form';

class ProductoList extends Component {

    state = {
        productos: [],
        totalResults: 0
    }

    componentDidMount() {
      const urlProducto = 'http://estetik.herokuapp.com/api/producto';
      axios.get(urlProducto)
        .then(res => {
          this.setState({
            productos: res.data.productos.data,
            totalResults: res.data.productos.data.count
          })
      })
    }

    getProductoList = (page) => {
      const urlProducto = `http://estetik.herokuapp.com/api/producto/?page=${page}`;
      axios.get(urlProducto)
        .then(res => {
          this.setState({
            productos: res.data.productos.data,
            totalResults: res.data.productos.data.count
          })
      })
    }

    render() {
        return(
          <div>
            <h3>Listado de productos</h3>
            <Producto data={this.state.productos} totalResults={this.state.totalResults} getProductoList={this.getProductoList}/>
            <hr />
            <h3>Crear Producto Nuevo</h3>
            <CustomForm/>
          </div>
        );
    }
}

export default ProductoList;