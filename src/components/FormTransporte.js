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

    handleInputChanges = (event) => {
        let nombre = event.target.nombre;
        let value = event.target.value;
        this.setState({[nombre]:value})

    }

    handleFormSubmit = (requestType, id) => {
        const precio = this.state.precio;
        const nombre = this.state.nombre;
        const imagen = this.state.imagen
        switch ( requestType ){
            case 'post':
                return axios.post('http://estetik.herokuapp.com/api/servicio', {
                    precio: precio,
                    nombre: nombre,
                    imagen: imagen
                })
                .then(res => console.log(res))  
                .catch(error => console.log(error));
            case 'put':
                return axios.put(`http://estetik.herokuapp.com/api/servicio/${id}`, {
                    precio: precio,
                    nombre: nombre,
                    imagen: imagen,
                })
                .then(res => console.log(res))
                .catch(error => console.log(error));
            default:
                //nothing
        }
    }

    render(){   
        return (
            <div>
            <Form 
                {...formItemLayout}
            > 

                <Form.Item name="precio" label="precio">
                    <Input type="number" onChange={this.handleInputChanges} name="precio" value={this.state.precio} placeholder="precio" />
                </Form.Item>

                <Form.Item name="nombre" label="Nombre">
                    <Input onChange={this.handleInputChanges} value={this.state.nombre} name="nombre" />
                </Form.Item>

                <Form.Item name="imagen" label="imagen">
                    <Input onChange={this.handleInputChanges} value={this.state.imagen} name="imagen" />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button onClick={(event) =>{this.handleFormSubmit (this.props.requestType, this.props.id)} } href='/servicio' type="primary" shape="round" htmlType="submit">{this.props.btnText}</Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
}
export default ServicioForm;
