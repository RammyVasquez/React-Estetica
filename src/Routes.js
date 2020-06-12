import React from 'react';
import {Route} from 'react-router-dom';
import ProductoList from './containers/ProductoList';
import ProductoDetail from './containers/ProductoDetail';
import ServicioList from './containers/ServicioList';
import ServicioDetail from './containers/ServicioDetail';
import VentaList from './containers/VentaList';
import TransporteList from './containers/TransporteList';
import MisVentasList from './containers/MisVentasList';



const BaseRouter = () => (
    <div>
        <Route exact path='/producto' component={ProductoList} />
        <Route exact path='/producto/:id' component={ProductoDetail} />
        <Route exact path='/servicio' component={ServicioList} />
        <Route exact path='/servicio/:id' component={ServicioDetail} /> 
        <Route exact path='/venta' component={VentaList} /> 
        <Route exact path='/transporte' component={TransporteList} /> 
        <Route exact path='/misVentas' component={MisVentasList} /> 
    </div>
)
export default BaseRouter;