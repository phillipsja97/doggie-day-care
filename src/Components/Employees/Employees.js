import React from 'react';
import propTypes from 'prop-types';
import dogShape from '../../Helpers/Propz/dogShape';
import employeeShape from '../../Helpers/Propz/employeeShape';

class Employee extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="Dog col-4">
        <div className="card">
          <div className="card-body">
    <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
            <p className="card-text">{employee.phoneNumber}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
