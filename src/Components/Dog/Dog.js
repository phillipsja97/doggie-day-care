import React from 'react';
import PropTypes from 'prop-types';
import dogShape from '../../Helpers/Propz/dogShape';
import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-4">
        <div className="card" id="dogCard">
          <div className="card-body">
            <h5 className="card-title">{dog.name}</h5>
            <img src={dog.imageUrl} id="dogImage" alt={dog.name}/>
            <p className="card-text">{dog.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
