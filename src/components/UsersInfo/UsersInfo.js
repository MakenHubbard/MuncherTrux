import React from 'react';

import './UsersInfo.css';

class UsersInfo extends React.Component {

  render () {

    return (
      <div className="container">
        <form>
          <div>
            <div class="form-group">
              <label for="nameOfCompany">Company Name: </label>
              <input type="text" className="form-control" id="nameOfCompany" placeholder="" />
            </div>
          </div>
          <div class="form-group">
            <label for="bioField">About: </label>
            <input type="text" className="form-control" id="bioField" placeholder="What would you like us to know about your company?" />
          </div>
          <div class="form-group">
            <label for="imgUrl">Image Url: </label>
            <input type="text" className="form-control" id="imgUrl" placeholder=""/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  };
};

export default UsersInfo;
