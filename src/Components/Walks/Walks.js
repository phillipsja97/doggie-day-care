import React from 'react';

class Walks extends React.Component {
  state = {
    walks: [],
    showWalks: false,
  }

  render() {
    const { walk } = this.props;
    return (
          <div class="card col-4">
            <div class="card-body">
              <h5 class="card-title">Dog: {walk.dogId}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Date: {walk.date}</h6>
              <p class="card-text">Scheduled Walker: {walk.employeeId}</p>
                <button className="btn btn-outline-primary">Delete Walk</button>
                <button className="btn btn-outline-primary">Add Another Walk</button>
            </div>
          </div>
    );
  }
}

export default Walks;
