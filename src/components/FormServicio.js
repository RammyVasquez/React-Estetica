import React, {Component} from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

class ServicioForm extends Component{

    state = {
        precio: "",
        imagen: "",
        nombre: ""
    }

    handleInputChanges = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    PostSubmit = () => {
        debugger;
        const precio = this.state.precio;
        const nombre = this.state.nombre;
        const imagen = this.state.imagen
        axios.post('http://estetik.herokuapp.com/api/servicio', {
                    precio: precio,
                    nombre: nombre,
                    imagen: imagen
                })
                .then(res => {
                    console.log(res)
                    axios.get('http://estetik.herokuapp.com/api/servicio')
                    .then(res => {
                        const servicios = res.data;
                        this.setState({servicios});
                    })
                }
                    )  
                .catch(error => console.log(error));           
    }

    render(){   
        return (
            <div>
            <Form {...formItemLayout} > 

                <Form.Item name="nombre" label="Nombre">
                    <Input onChange={this.handleInputChanges} name="nombre" value={this.state.nombre}/>
                </Form.Item>

                <Form.Item name="precio" label="precio">
                    <Input type="number" onChange={this.handleInputChanges} name="precio" value={this.state.precio}  />
                </Form.Item>

                <Form.Item name="imagen" label="imagen">
                    <Input onChange={this.handleInputChanges} name="imagen" value={this.state.imagen}/>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button onClick={this.PostSubmit} type="primary" shape="round">Crear servicio{/* {this.props.btnText} */}</Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
}
export default ServicioForm;
