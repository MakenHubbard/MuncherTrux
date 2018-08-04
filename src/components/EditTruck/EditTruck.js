import React from 'react';
import truckRequests from '../../firebaseRequests/trucks';

import './EditTruck.css';

const defaultTruck = {
  name: '',
  bio: '',
  imageUrl: '',
  uid: '',
};

class EditTruck extends React.Component {
  state = {
    truck: defaultTruck,
  }

  componentDidMount () {
    const fbId = this.props.match.params.id;
    truckRequests
      .gettingUsersTruckForEdit(fbId)
      .then((truck) => {
        this.setState({truck});
      })
      .catch((err) => {
        console.error('something went wrong with the getRequest in the edit truck');
      });
  }

  saveNewTruckEdit = (e) => {
    const truckId = this.props.match.params.id;
    const updatedTruck = this.state.truck;
    e.preventDefault();
    truckRequests
      .editTruck(truckId, updatedTruck)
      .then(() => {
        this.props.history.push('/usershome');
      })
      .catch((err) => {
        console.error('something went wrong in the saveNewTruckEdit function in EditTruck', err);
      });
  }

  submitTruckEdit = (info, e) => {
    const tempTruck = { ...this.state.truck };
    tempTruck[info] = e.target.value;
    this.setState({ truck: tempTruck });
  }

  editNameChange = (e) => {
    this.submitTruckEdit('name', e);
  }

  editBioChange = (e) => {
    this.submitTruckEdit('bio', e);
  }

  editImageChange = (e) => {
    this.submitTruckEdit('imageUrl', e);
  }

  render () {
    const truck = this.state;
    return (
      <div className="EditTruck">
        <div className="container">
          <form>
            <div>
              <div className="form-group">
                <label htmlFor="nameOfCompany">Company Name: </label>
                <input type="text" className="form-control" id="name" placeholder="" defaultValue={truck.name} onChange={this.editNameChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="bioField">About: </label>
              <input type="text" className="form-control" id="bio" placeholder="What would you like us to know about your company?" defaultValue={truck.bio} onChange={this.editBioChange} />
            </div>
            <div className="form-group">
              <label htmlFor="imgUrl">Image Url: </label>
              <input type="text" className="form-control" id="imageUrl" placeholder="" defaultValue={truck.imageUrl} onChange={this.editImageChange} />
            </div>
            <div className="col-sm-6">
              <button
                type="submit"
                className="btn btn-default col-xs-12"
                onClick={this.saveNewTruckEdit}
              >
                Save Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
};

export default EditTruck;
