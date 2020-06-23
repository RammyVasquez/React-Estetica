import React, {Component} from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

class CustomForm extends Component{

    state = {
        nombre: "",
        stock: "",
        precio: "",
        imagen: ""        
    }

    handleInputChanges = event => {
        this.setState({ 
            [event.target.name]:event.target.value
        })
    }

    PostSubmit = () => {
        const nombre = this.state.nombre;
        const stock = this.state.stock;
        const precio = this.state.precio;        
        const imagen = this.state.imagen
        debugger;
        axios.post('http://estetik.herokuapp.com/api/producto', {
            nombre: nombre,            
            stock: stock,
            precio: precio,     
            imagen: imagen
        })
        .then(res => console.log(res))  
        .catch(error => console.log(error));   
    }

    render(){   
        return (
            <div>
            <Form {...formItemLayout}> 
                <Form.Item name="nombre" label="Nombre">
                    <Input onChange={this.handleInputChanges} name="nombre" value={this.state.nombre}/>
                </Form.Item>
            
                <Form.Item name="stock" label="stock">
                    <Input type="number" onChange={this.handleInputChanges} name="stock" value={this.state.stock}/>
                </Form.Item>

                <Form.Item name="precio" label="precio">
                    <Input type="number" onChange={this.handleInputChanges} name="precio" value={this.state.precio}/>
                </Form.Item>

                <Form.Item name="imagen" label="imagen">
                    <Input onChange={this.handleInputChanges} name="imagen" value={this.state.imagen}/>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button onClick={this.PostSubmit} href="/producto" type="primary" shape="round">Crear producto{/* {this.props.btnText} */}</Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
}
export default CustomForm;
