import React from 'react';
import dogsData from '../../Helpers/Data/dogsData';
import Dog from '../Dog/Dog';
import Walks from '../Walks/Walks';
import Employee from '../Employees/Employees';
import employeesData from '../../Helpers/Data/employeesData';
import walksData from '../../Helpers/Data/walksData';
import WalkForm from '../WalkForm/WalkForm';
import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
    showWalks: false,
    showWalkForm: false,
  }

  componentDidMount() {
    this.getDogs();
    this.getEmployees();
    this.getWalks();
  }

  getDogs = () => {
    dogsData.getAllDogs()
      .then((dogs) => {
        this.setState({ dogs });
      })
      .catch((errorFromGetDogs) => console.error(errorFromGetDogs));
  }

  getEmployees = () => {
    employeesData.getAllEmployees()
      .then((employees) => {
        this.setState({ employees });
      })
      .catch((errorFromGetEmp) => console.error(errorFromGetEmp));
  }

  getWalks = () => {
    walksData.getAllWalks()
      .then((walks) => {
        this.setState({ walks });
      })
      .catch((errorFromGetWalks) => console.error(errorFromGetWalks));
  }

  setShowWalks = () => {
    this.setState({ showWalks: true });
  }

  hideShowWalks = () => {
    this.setState({ showWalks: false });
  }

  setEditMode = () => {
    this.setState({ editMode: true });
  }

  setShowWalkForm = () => {
    this.setState({ showWalkForm: true });
  }

  addNewWalk = (newWalk) => {
    walksData.saveNewWalk(newWalk)
      .then(() => {
        this.getWalks();
        this.setState({ showWalkForm: false });
      })
      .catch((errorFromSaveWalk) => console.error(errorFromSaveWalk));
  }

  render() {
    const { setShowWalks, hideShowWalks, setShowWalkForm } = this.props;
    return (
      <div className="App">
        <div className="d-flex justify-content-center" id="dogWalks">
        {
        (this.state.showWalks) ? (<button className="btn btn-danger" onClick={this.hideShowWalks}>X</button>)
          : (<button className="btn btn-primary" onClick={this.setShowWalks}>Show Dog Walk Schedule</button>)
        }
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {
            (this.state.showWalkForm) && <WalkForm dogs={this.state.dogs} employees={this.state.employees} addNewWalk={this.addNewWalk}/>
          }
    { this.state.showWalks && this.state.walks.map((walk) => (<Walks key={walk.id} walk={walk} dog={this.state.dogs.find((x) => x.id === walk.dogId)} employee={this.state.employees.find((x) => x.id === walk.employeeId)} showWalkForm={this.state.showWalkForm} />))}
        <div className="addWalkButton">
      { (this.state.showWalks) && <button className="btn btn-primary" onClick={this.setShowWalkForm}>Add A New Walk</button> }
        </div>
        </div>
          <div className="d-flex flex-row flex-wrap">
            <div className="col-6">
              <h1 className="text-center">Dogs</h1>
                  <div className="d-flex flex-wrap flex-row">
                    { this.state.dogs.map((dog) => (<Dog key={dog.id} dog={dog} />))};
                  </div>
            </div>
            <div className="col-6">
              <h1 className="text-center">Employees</h1>
                <div className="d-flex flex-wrap flex-row">
                  { this.state.employees.map((employee) => (<Employee key={employee.id} employee={employee} />))}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
