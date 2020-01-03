import React from 'react';
import dogsData from '../../Helpers/Data/dogsData';
import Dog from '../Dog/Dog';
import Employee from '../Employees/Employees';
import employeesData from '../../Helpers/Data/employeesData';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.getDogs();
    this.getEmployees();
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

  render() {
    return (
      <div>
      <div className="App">
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
      </div>
    );
  }
}

export default Home;
