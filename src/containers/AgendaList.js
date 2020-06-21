import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import Agenda from '../components/Agenda';
import Pago from '../components/Pago';
import FormPago from '../components/FormPago'

class AgendaList extends Component {

    render() {
        return(
            <div>
                <section>
                    <h2>Registrar cita nueva</h2>
                    <Agenda/>
                </section>
                <section>
                    {/* <Pago/> */}
                    <FormPago></FormPago>
                </section>
            </div>

        );
    }

} export default AgendaList;