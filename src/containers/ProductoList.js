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
            <Producto data={this.state.productos} totalResults={this.state.totalResults} getProductoList={this.getProductoList}/>
            <hr />
            <h2>Crear Producto Nuevo</h2>
            <CustomForm 
              requestType="post"
              id={null}
              btnText="Create"
            />
          </div>
        );
    }
}

export default ProductoList;