import React from 'react';

class WalkForm extends React.Component {
  state = {
    newDogId: '',
    newEmployeeId: '',
    walkDate: '',
  }

  componentDidMount() {
    const { walkToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({ newDogId: walkToEdit.dogId, newEmployeeId: walkToEdit.employeeId, walkDate: walkToEdit.date });
    }
  }

  addWalkEvent = (e) => {
    const { addNewWalk } = this.props;
    e.preventDefault();
    const newWalk = {
      dogId: this.state.newDogId,
      employeeId: this.state.newEmployeeId,
      date: this.state.walkDate,
    };
    // actually save the object
    addNewWalk(newWalk);
  }

  updateWalkEvent = (e) => {
    e.preventDefault();
    const { updateWalk, walkToEdit } = this.props;
    const updatedWalk = {
      dogId: this.state.newDogId,
      employeeId: this.state.newEmployeeId,
      date: this.state.walkDate,
    };
    updateWalk(walkToEdit.id, updatedWalk);
  }

  dogNameChange = (e) => {
    e.preventDefault();
    this.setState({ newDogId: e.target.value });
  }

  walkDateChange = (e) => {
    e.preventDefault();
    this.setState({ walkDate: e.target.value });
  }

  employeeIdChange = (e) => {
    e.preventDefault();
    this.setState({ newEmployeeId: e.target.value });
  }

  render() {
    const { dogs, employees, editMode } = this.props;
    const printDogNames = dogs.map((dog) => <option key={dog.id} value={dog.id}>{dog.name}</option>);
    const printEmployeeNames = employees.map((employee) => <option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>);
    return (
      <div className="d-flex justify-content-center">
      <div className="form-group">
      <label for="exampleFormControlSelect1">Dogs</label>
      <select className="form-control" value={this.state.newDogId} onChange ={this.dogNameChange} id="exampleFormControlSelect1">
        {printDogNames}
      </select>
    </div>
    <div className="form-group">
    <label for="exampleFormControlSelect2">Employees</label>
    <select className="form-control" value={this.state.newEmployeeId} onChange={this.employeeIdChange} id="exampleFormControlSelect2">
      {printEmployeeNames}
    </select>
  </div>
  <div class="form-group">
    <label for="date" class="col-sm-2 col-form-label">Date</label>
    <div class="col-sm-10">
      <input type="date" class="form-control" value={this.state.walkDate} onChange={this.walkDateChange} id="inputPassword"/>
    </div>
  </div>
  {
  (editMode) ? (<button className="btn btn-primary" onClick={this.updateWalkEvent}>Update Walk</button>)
    : (<button className="btn btn-primary" onClick={this.addWalkEvent}>Save New Walk</button>)
  }
  </div>
    );
  }
}


export default WalkForm;
