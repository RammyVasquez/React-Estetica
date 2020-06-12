import React, {Component} from 'react';
import axios from 'axios';
import {Card, Button, Form} from 'antd'
import ServicioForm from '../components/FormServicio';

class ServicioDetail extends Component {

    state = {
        servicio: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://estetik.herokuapp.com/api/servicio/${id}`)
            .then(res => {
                this.setState({
                    servicio: res.data.data
                })
         console.log(this.state.servicio);
        })
    }

    handleDelete = (event) => {
        const id = this.props.match.params.id;
        axios.delete(`http://estetik.herokuapp.com/api/servicio/${id}`)
            .then(res => {
                console.log(res);
            });
            this.props.history.push('/');
            this.forceUpdate();
    }

    render() {
    var servicios = this.state.servicio
        return(
            <div>
                <Card title={servicios.nombre}>
                    <p>precio: {servicios.precio}</p>
                    <p>Imagen:<img
                    width={272}
                    height={200}
                    alt="logo"
                    src={servicios.imagen}
                /></p>
                </Card>
                <ServicioForm
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
export default ServicioDetail;