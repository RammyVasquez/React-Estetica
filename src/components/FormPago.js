import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import Agenda from './Agenda'
import axios from 'axios';

const FormPago = () => {

    const [state, setState] = useState({
        number: '',
        name: '',
        cvc: '',
        expiry: '',
        focus: ''
    })

    const handleFocus = (e) => {
        setState({ 
            ...state,
            focus: e.target.name 
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ 
            ...state,
            [name]: value 
        });
    }

    const submitPayment = () => {
        console.log("name => " , state.name)
        console.log("number => " , state.number)
        console.log("expiry => " , state.expiry)
        console.log("cvc => " , state.cvc)
        alert(JSON.stringify(state))
    }
    
    return (
        <div className="card" style={{width:750}}>
            <div className="card-body" style={{display:"flex", flexDirection:"row"}}>
                <Cards
                    cvc={state.cvc}
                    expiry={state.expiry}
                    focused={state.focus}
                    name={state.name}
                    number={state.number}
                />
                <form style={{marginTop:20, marginLeft:20}}>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control"
                            name="number"
                            maxlength="16"
                            placeholder="Número de tarjeta"
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            maxLength="30"
                            placeholder="Nombre"
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input
                                type="number"
                                className="form-control"
                                name="expiry"
                                maxLength="4"
                                placeholder="Expiración"
                                onChange={handleChange}
                                onFocus={handleFocus}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <input
                                type="number"
                                className="form-control"
                                name="cvc"
                                maxLength="4"
                                placeholder="CVC"
                                onChange={handleChange}
                                onFocus={handleFocus}
                            />
                        </div>
                    </div>
                    {/* <button
                        style={{width:150}}
                        type="button"
                        className="btn btn-success btn-block btn-lg"
                        onClick={submitPayment}
                    >Pagar</button> */}
                </form>
            </div>
        </div>
    );
}

export default FormPago