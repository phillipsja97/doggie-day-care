import React from 'react';
import dogsData from '../../Helpers/Data/dogsData';

class Walks extends React.Component {
  state = {
    walks: [],
    showWalks: false,
  }

  render() {
    const { walk, dog, employee } = this.props;
    console.log(dog);
    console.log(employee);
    return (
      <div className="card col-4">
            <div className="card-body">
              <h5 className="card-title">Dog: {dog.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Date: {walk.date}</h6>
              <p className="card-text">Scheduled Walker: {employee.firstName} {employee.lastName}</p>
                <button className="btn btn-outline-primary">Delete Walk</button>
                <button className="btn btn-outline-primary">Add Another Walk</button>
            </div>
          </div>
    );
  }
}

export default Walks;
