import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import Agenda from '../components/Agenda';

class AgendaList extends Component {

    render() {
        return(
            <div>
                <Agenda/>
            </div>
        );
    }

} export default AgendaList;