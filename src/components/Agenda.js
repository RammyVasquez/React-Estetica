import React, {Component} from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'
import { Form, Input, Button } from 'antd'
import FormItem from 'antd/lib/form/FormItem'

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

class Agenda extends Component {
    
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    
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
                        
                    </FormItem>

                    <FormItem name="servicio" label="Seleccione servicio(s)">
                        
                    </FormItem>

                    <FormItem name="transporte" label="Requiere transporte?">
                        
                    </FormItem>
                </Form>
                
            </div>           
        );
    }

} export default Agenda;