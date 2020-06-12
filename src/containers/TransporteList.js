import React, {Component} from 'react';
import axios from 'axios';
import Transporte from '../components/Transporte';
// import FormServicio from '../components/FormServicio';

class TransporteList extends Component {

    state = {
        transportes: [],
        totalResults: 0
    }

    componentDidMount() {
      const urlTransporte = 'http://189.173.28.254:8000/api/catalago';
      axios.get(urlTransporte)
        .then(res => {
          this.setState({
            transportes: res.data,
            totalResults: res.data.count
          })
      })
    }

    getTransporteList = (page) => {
      const urlTransporte = `http://189.173.28.254:8000/api/catalago/?page=${page}`;
      axios.get(urlTransporte)
        .then(res => {
          this.setState({
            transportes: res.data,
            totalResults: res.data.count
          })
      })
    }

    render() {
        return(
          <div>
            <Transporte data={this.state.transportes} totalResults={this.state.totalResults} getTransporteList={this.getTransporteList}/>
            <hr />
            {/* <h2>Create a Product</h2> */}
            {/* <FormServicio 
              requestType="post"
              id={null}
              btnText="Create"
            /> */}
          </div>
        );
    }
}

export default TransporteList;