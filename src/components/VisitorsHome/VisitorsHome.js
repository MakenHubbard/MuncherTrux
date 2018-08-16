import React from 'react';
import trucksRequest from '../../firebaseRequests/trucks';

import './VisitorsHome.css';

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
    const allTrucks = this.state.trucks.map((truck, index) => {
      const routeToVisitorsEvents = (e) => {
        e.preventDefault();
        this.props.history.push(`/visitorsevents/${truck.id}`);
      };
      return (
        <div className="row allTruckStuff" key={truck.id} index={index}>
          <div className="col-xs-4">
            <img src={truck.imageUrl} alt={truck.imageUrl}/>
          </div>
          <div className="col-xs-4 col-xs-offset-2">
            <h2>{truck.name}</h2>
            <div className="infoForVisitors">
              <p>{truck.bio}</p>
            </div>
            <div>
              <button className="visitorsCheckEvents" onClick={routeToVisitorsEvents}>
                Check On Events
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="listOfAllTrucks">
        <h1>Munchers</h1>
        <div>
          {allTrucks}
        </div>
      </div>
    );
  }
}

export default VisitorsHome;
