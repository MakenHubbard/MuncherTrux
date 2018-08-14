import React from 'react';
import trucksRequest from '../../firebaseRequests/trucks';

class VisitorsHome extends React.Component {
  state = {
    trucks: [],
  }

  componentDidMount = () => {
    trucksRequest
      .getAllTrucksRequest()
      .then((trucks) => {
        this.setState({ trucks });
      })
      .catch((err) => {
        console.error('error with getting all trucks in visitors home', err);
      });
  }

  render () {
    console.log(this.state.trucks);
    const allTrucks = this.state.trucks.map((truck, index) => {
      return (
        <div key={truck.id} index={index}>
          <h2>{truck.name}</h2>
        </div>
      );
    });
    return (
      <div>
        <h1>Munchers</h1>
        <div>
          {allTrucks}
        </div>
      </div>
    );
  }
}

export default VisitorsHome;
