import React from 'react';
import trucksRequests from '../../firebaseRequests/trucks';

import authRequests from '../../firebaseRequests/auth';
import './NewTruck.css';

const defaultTruck = {
  name: '',
  bio: '',
  imageUrl: '',
  uid: '',
};

class NewTruck extends React.Component {

  state = {
    newTruck: defaultTruck,
  };

  saveNewTruckEvent = (e) => {
    const { newTruck } = this.state;
    e.preventDefault();
    const uid = authRequests.getUid();
    newTruck.uid = uid;
    trucksRequests.postRequest(newTruck)
      .then(() => {
        this.props.history.push('/usershome');
      })
      .catch((err) => {
        console.error('inside the registsaveTrucker', err);
      });
  }

  infoFormField = (information, e) => {
    const tempTruck = { ...this.state.newTruck };
    tempTruck[information] = e.target.value;
    this.setState({ newTruck: tempTruck });
  }

  nameChange = (e) => {
    this.infoFormField('name', e);
  };

  bioChange = (e) => {
    this.infoFormField('bio', e);
  };

  imageUrlChange = (e) => {
    this.infoFormField('imageUrl', e);
  };

  render  () {
    const { newTruck } = this.state;
    return (
      <div>
        <h1 id="newTruckTitle">We need some Information from you</h1>
        <div className="NewTruck" id="regTruckFormBack">
          <div className="container" id="regTruckForm">
            <form>
              <div>
                <div className="form-group">
                  <label htmlFor="nameOfCompany">Company Name: </label>
                  <input type="text" className="form-control" id="name" placeholder="" value={newTruck.name} onChange={this.nameChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="bioField">About: </label>
                <input type="text" className="form-control" id="bio" placeholder="What would you like us to know about your company?" value={newTruck.bio} onChange={this.bioChange} />
              </div>
              <div className="form-group">
                <label htmlFor="imgUrl">Image Url: </label>
                <input type="text" className="form-control" id="imageUrl" placeholder="" value={newTruck.imageUrl} onChange={this.imageUrlChange} />
              </div>
              <div className="col-sm-6">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12 saveRegTruckBtn"
                  onClick={this.saveNewTruckEvent}
                >
                  Save Truck
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTruck;
