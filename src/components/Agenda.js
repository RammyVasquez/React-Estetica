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
    console.log(`checked = ${e.target.checked}`);
}

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

class Agenda extends Component {

    state = {
        startDate: new Date(),
        misServicios: []
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    
    componentDidMount() {
        const urlServicios = 'http://estetik.herokuapp.com/api/servicio';
        axios.get(urlServicios)
        .then(res => {
            this.setState({
                misServicios: res.data.servicios.data,
            })
        })
    }

    render() {      
        return(
            <div>
                <Form {...formItemLayout}>
                    <FormItem name="fecha" label="Seleccione una fecha">
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange} 
                        />
                    </FormItem>

                    <FormItem name="hora" label="Seleccione una hora">
                        <TimePicker use12Hours format="h:mm a" horaChange={horaChange} />
                    </FormItem>

                    <FormItem name="servicio" label="Seleccione servicio(s)">
                        {this.state.misServicios.map((item) => <Checkbox key={item.nombre}>{item.nombre} ${item.precio}</Checkbox>)}                      
                    </FormItem>

                    <FormItem name="transporte" label="Requiere transporte">
                        <Checkbox trsChange={trsChange}>Presiona aquí para verificar disponibilidad</Checkbox>
                    </FormItem>
                </Form>
                
            </div>           
        );
    }

} export default Agenda;