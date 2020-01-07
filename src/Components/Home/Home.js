import React from 'react';
import dogsData from '../../Helpers/Data/dogsData';
import Dog from '../Dog/Dog';
import Walks from '../Walks/Walks';
import Employee from '../Employees/Employees';
import employeesData from '../../Helpers/Data/employeesData';
import walksData from '../../Helpers/Data/walksData';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
    showWalks: false,
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

  render() {
    const { setShowWalks, hideShowWalks } = this.props;
    return (
      <div className="App">
        <div className="d-flex justify-content-center" id="dogWalks">
        {
        (this.state.showWalks) ? ( <button className="btn btn-danger" onClick={this.hideShowWalks}>X</button>)
          : (<button className="btn btn-primary" onClick={this.setShowWalks}>Show Dog Walk Schedule</button>)
        }
        </div>
        <div className="d-flex flex-row flex-wrap">
    { this.state.showWalks && this.state.walks.map((walk) => (<Walks key={walk.id} walk={walk} />))}}
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
