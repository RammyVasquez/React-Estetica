import React, {Component} from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'
import { Form, Input, Button, TimePicker, Checkbox } from 'antd'
import FormItem from 'antd/lib/form/FormItem'

function horaChange(time, timeString) {
    console.log(time, timeString);
}

function trsChange(e) {
    console.log(`transporte = ${e.target.checked}`);
}

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

class Agenda extends Component {

    state = {
        startDate: new Date(),
        misServicios: [],
        fecha: "",
        hora: "",
        servicio: [],
        transporte: "",
        numTarjeta: "",
        mesTarjeta: "",
        anioTarjeta: "",
        cvcTarjeta: "",
        nombre: ""
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    
    handleInputChanges = event => {
        debugger;
        this.setState({ 
            [event.target.name]:event.target.value
        })
    }

    componentDidMount() {
        const urlServicios = 'http://estetik.herokuapp.com/api/servicio';
        axios.get(urlServicios)
        .then(res => {
            this.setState({
                misServicios: res.data.servicios.data,
            })
        })
    }

    postSubmit = () => {
        const fecha = this.state.fecha;
        const hora = this.state.hora;
        const servicio = this.state.servicio;
        const transporte = this.state.transporte;
        const numTarjeta= this.state.numTarjeta;
        const mesTarjeta= this.state.mesTarjeta;
        const anioTarjeta= this.state.anioTarjeta;
        const cvcTarjeta = this.state.cvcTarjeta;
        const nombre = this.state.nombre;
        debugger;
        axios.post('http://estetik.herokuapp.com/api/cita', {
            fecha: fecha,
            hora: hora,
            servicio: servicio,
            transporte: transporte,
            numTarjeta: numTarjeta,
            mesTarjeta: mesTarjeta,
            anioTarjeta: anioTarjeta,
            cvcTarjeta: cvcTarjeta,
            nombre: nombre
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }

    render() {      
        return(
            <div>
                <Form {...formItemLayout}>
                    
                </Form>  
                <hr/>
                <Form {...formItemLayout}>
                <FormItem name="fecha" label="Seleccione una fecha">
                        <DatePicker
                            value={this.state.fecha}
                            onChange={this.handleChange}
                            name="fecha"
                            selected={this.state.startDate}
                        />
                    </FormItem>

                    <FormItem name="hora" label="Seleccione una hora">
                        <TimePicker name="hora" format="HH:mm" onChange={this.handleInputChanges} value={this.state.hora.toString} />
                    </FormItem>

                    <FormItem name="servicio" label="Seleccione servicio(s)">
                        {this.state.misServicios.map((item) => <Checkbox onChange={this.handleInputChanges} name={item.id} value={this.state.nombre} key={item.nombre}>{item.nombre} ${item.precio}</Checkbox>)}                      
                    </FormItem>

                    <FormItem name="transporte" label="Requiere transporte">
                        <Checkbox onChange={this.handleInputChanges} value={this.state.transporte} name="transporte" onClick={trsChange}>Presiona aquí para verificar disponibilidad</Checkbox>
                    </FormItem>

                    <h3>Detalles de pago</h3>
                    <img style={{width: 300}} src={ require('../utils/creditcardicons.png') } />

                    <FormItem name="numTarjeta" label="Número de tarjeta">
                        <Input onChange={this.handleInputChanges} value={this.state.numTarjeta} name="numTarjeta" type="number"/>
                    </FormItem>

                    <FormItem name="mesTarjeta" label="Mes">
                        <Input onChange={this.handleInputChanges} value={this.state.mesTarjeta} name="mesTarjeta" type="number"/>
                    </FormItem>

                    <FormItem name="anioTarjeta" label="Año">
                        <Input onChange={this.handleInputChanges} value={this.state.anioTarjeta} name="anioTarjeta" type="number"/>
                    </FormItem>

                    <FormItem name="cvcTarjeta" label="CVC">
                        <Input onChange={this.handleInputChanges} value={this.state.cvcTarjeta} name="cvcTarjeta" type="number"/>
                    </FormItem>

                    <FormItem name="nombre" label="Nombre del propietario">
                        <Input onChange={this.handleInputChanges} value={this.state.nombre} name="nombre"/>
                    </FormItem>

                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Button onClick={this.postSubmit} href="/agenda" type="primary" shape="round">Agendar cita{/* {this.props.btnText} */}</Button>
                    </Form.Item>
                </Form>
            </div>           
        );
    }

} export default Agenda;