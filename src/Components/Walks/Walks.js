import React from 'react';
import dogsData from '../../Helpers/Data/dogsData';

class Walks extends React.Component {
  state = {
    walks: [],
    editMode: false,
  }

  deleteWalkEvent = (e) => {
    e.preventDefault();
    const { deleteWalk, walk } = this.props;
    deleteWalk(walk.id);
  }

  setEditModeEvent = (e) => {
    const { setEditMode, setWalkToEdit, walk } = this.props;
    e.preventDefault();
    setEditMode(true);
    setWalkToEdit(walk);
  }

  render() {
    const {
      walk,
      dog,
      employee,
    } = this.props;
    console.log(dog, employee);
    return (
      <div className="card col-4">
            <div className="card-body">
              <h5 className="card-title">Dog: {dog.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Date: {walk.date}</h6>
              <p className="card-text">Scheduled Walker: {employee.firstName} {employee.lastName}</p>
                <button className="btn btn-outline-primary" onClick={this.deleteWalkEvent}>Delete Walk</button>
                <button className="btn btn-outline-primary" onClick={this.setEditModeEvent}>Update Walk</button>
            </div>
          </div>
    );
  }
}

export default Walks;
