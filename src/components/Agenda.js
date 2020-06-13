import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckBox from './Checkbox';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

class Agenda extends Component {

    state = {
        date: new Date(),
      }
     
    onChange = date => this.setState({ date })

    constructor(props) {
        super(props)
        this.state = {
            servicios: [
                {id: 1, value: "Corte para perro pequeño", isChecked: false},
                {id: 2, value: "Corte para perro mediano", isChecked: false},
                {id: 3, value: "Corte para perro grande", isChecked: false},
                {id: 4, value: "Baño para perro pequeño", isChecked: false},
                {id: 5, value: "Baño para perro mediano", isChecked: false},
                {id: 6, value: "Baño para perro grande", isChecked: false}
          ]
        }
      }

    handleAllChecked = (event) => {
        let servicios = this.state.servicios
        servicios.forEach(servicios => servicios.isChecked = event.target.checked) 
        this.setState({servicios: servicios})
      }
    
    handleCheckChieldElement = (event) => {
        let servicios = this.state.servicios
        servicios.forEach(servicios => {
           if (servicios.value === event.target.value)
           servicios.isChecked =  event.target.checked
        })
        this.setState({servicios: servicios})
      }

    render() {
        return(
            <div>
                <Form {...formItemLayout}> 
                <Form.Item name="fecha" label="Fecha y hora">
                    <DatePicker
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </Form.Item>
            
                <Form.Item name="servicio" label="Servicio">
                    <ul>
                        {
                            this.state.servicios.map((servicios) => {
                                return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...servicios} />)
                            })
                        }
                    </ul>
                </Form.Item>

                <Form.Item name="transporte" label="Requiere transporte">
                    <input type="checkbox" defaultChecked={false} />
                </Form.Item>

                <Form.Item name="imagen" label="Subtotal">
                    {}
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button onClick={this.PostSubmit} href="/producto" type="primary" shape="round">Continuar{/* {this.props.btnText} */}</Button>
                </Form.Item>
            </Form>
            </div>           
        );
    }

} export default Agenda;