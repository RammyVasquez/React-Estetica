import React, {Component} from 'react';
import axios from 'axios';
import {Card, Button, Form} from 'antd'
import CustomForm from '../components/Form';

class ProductoDetail extends Component {

    state = {
        producto: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://estetik.herokuapp.com/api/producto/${id}`)
            .then(res => {
                this.setState({
                    producto: res.data.data
                })
         console.log(this.state.producto);
        })
    }

    handleDelete = (event) => {
        const id = this.props.match.params.id;
        axios.delete(`http://estetik.herokuapp.com/api/producto/${id}`)
            .then(res => {
                console.log(res);
            });
            this.props.history.push('/');
            this.forceUpdate();
    }

    render() {
    var productos = this.state.producto
        return(
            <div>
                <Card title={productos.nombre}>
                    <p>Stock: {productos.stock}</p>
                    <p>precio: {productos.precio}</p>
                    <p>Imagen:<img
                    width={272}
                    height={200}
                    alt="logo"
                    src={productos.imagen}
                /></p>
                </Card>
                <CustomForm 
                    requestType="put"
                    id={this.props.match.params.id}
                    btnText="Edit"
                />
                <Form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </Form>
            </div>
        );
        
    }
}
export default ProductoDetail;