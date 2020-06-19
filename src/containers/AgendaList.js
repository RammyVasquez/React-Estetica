import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import Agenda from '../components/Agenda';
import Pago from '../components/Pago';

class AgendaList extends Component {

    render() {
        return(
            <div>
                <section>
                    <h2>Registrar cita nueva</h2>
                    <Agenda/>
                </section>
                <section>
                    <h2>Detalles de pago</h2>
                    <Pago/>
                </section>
            </div>

        );
    }

} export default AgendaList;