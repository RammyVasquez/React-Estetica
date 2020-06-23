import React, {Component} from 'react';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Form, Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import FormPago from './FormPago';
import moment from 'moment';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import nuevasHoras from '../utils/nuevasHoras.json'

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

class Agenda extends Component {

    state = {
        diaHoy: new Date(),
        manana: new Date().setDate(new Date().getDate() + 1),
        hora: 0,
        horas: [],
        fecha: null,
        misServicios: [],
        servicio: null,
        number: null,
        name: null,
        cvc: null,
        expiry: null,
        focus: null,
        agenda: [],
        fechaFormato: moment(this.fecha).format('YYYY-MM-DD'),
    };

    handleFecha = fecha => {
        this.setState({
            fecha: fecha,
            fechaFormato: moment(fecha).format('YYYY-MM-DD'),
            hora: null
        });
        // this.props.fecha(moment(fecha).format('YYYY-MM-DD'))
        // this.props.hora(null)
        this.ObtenerHoras(fecha)
    };

    handleHora = hora => {
        this.setState({
            hora: hora
        });
        // this.props.setHora(hora.value)
    };

    ObtenerDias() {
        var dias = [];
        this.state.agenda.map(fecha => {
            if (new Date(fecha.fecha).getDay() !== 5 && new Date(fecha.fecha).getDay() !== 6)
                dias.push(new Date(fecha.fecha).setDate(new Date(fecha.fecha).getDate() + 1))
            return dias;
        })
        return dias
    };

    ObtenerHoras(fecha2) {
        var horas = [];
        var horasFecha = this.state.agenda.find(fecha => fecha.fecha === moment(fecha2).format('YYYY-MM-DD'))
        try{
            horasFecha.horas.map(hora => (
                horas.push(hora)
            ))
        }
        catch{
            JSON.parse(horasFecha.horas).map(hora => (
                horas.push(hora)
            ))
        }
        
        this.setState({
            horas: horas
        })
        return horas
    };

    handleChange = event => {
        this.setState({
            fecha: event.target.value
        });
    };
    
    handleServicio = event => {
        const urlServicios = 'http://estetik.herokuapp.com/api/servicio';
        axios.get(urlServicios)
        .then(res => {
            this.setState({
                misServicios: res.data.servicios.data,
            })
        })
    }

    handleInputChange = property => {
        return e => {
            this.setState({
                [property]: e.target.value
            })
        }
    }

    handleInputChanges = event => {
        debugger;
        this.setState({ 
            [event.target.name]:event.target.value
        })
    }

    componentDidMount() {
        const urlDisponibilidad = 'http://estetik.herokuapp.com/api/disponibilidad';
        axios.get(urlDisponibilidad)
        .then(res => {
            nuevasHoras['disponibilidad'] = res.data.citas.data
            this.setState({
                agenda: res.data.citas.data,
            })
        })
    }

    fechasDisp() {

    }

    postSubmit = () => {
        const fecha = this.state.fechaFormato;
        const hora = this.state.hora["value"];
        const servicio = this.state.servicio;
        axios.post('http://estetik.herokuapp.com/api/cita', {
            fecha: fecha,
            hora: hora,
            servicio: servicio,
        })
        .then(res => {
            var fecha = nuevasHoras['disponibilidad'].find(fechasDisp => fechasDisp.fecha === JSON.parse(res.config.data).fecha);
            fecha.horas = JSON.parse(fecha.horas).filter(hora => hora !== JSON.parse(res.config.data).hora);
            axios.put('https://estetik.herokuapp.com/api/disponibilidad/' + fecha.id, {horas: fecha.horas})
            .then(respuesta => console.log(respuesta))
            .catch(error => {
                alert("No se pudo actualizar la información");
                console.log(error);
            })
            alert("Pago realizado, vuelva pronto!");
            window.location.reload();
        })            
        .catch(error => {
            alert("Oops! Algo salió mal al pagar");
            console.log(error)
        });
    }

    render() {      
        return(
            <div>
                <Form {...formItemLayout}>
                    <FormItem name="fecha" label="Seleccione una fecha">
                        <ReactDatePicker
                            dateFormat="yyyy/MM/dd"
                            selected={this.state.fecha}
                            onChange={this.handleFecha}
                            includeDates={this.ObtenerDias()}
                            minDate={this.state.manana}
                            autoComplete="off"
                        />
                    </FormItem>

                    <FormItem style={{width:"40%"}} label="Seleccione una hora">
                        <Dropdown                            
                            options={this.state.horas}
                            placeholder="Elija hora"
                            onChange={this.handleHora}
                            value={this.state.hora}
                            disabled={this.state.fecha === null ? true : false}
                        />
                    </FormItem>

                    <FormItem style={{width:"40%"}} name="servicio" label="Seleccione servicio">
                        <Select name="servicios"
                            onClick={this.handleServicio}
                            onChange={(event) => {this.setState({servicio: event})}} >
                            {this.state.misServicios.map((item) => <option key={item.nombre} value={this.state.nombre}>{item.nombre} ${item.precio}</option>)}
                        </Select>
                    </FormItem>
                    <FormPago/>
                </Form>
                <button
                    style={{width:150, marginLeft:"250px", marginTop: "20px"}}
                    type="button"
                    className="btn btn-success btn-block btn-lg"
                    onClick={this.postSubmit}                    
                >Pagar</button>
            </div>           
        );
    }

} export default Agenda;