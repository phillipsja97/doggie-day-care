import React from 'react';
import dogsData from '../../Helpers/Data/dogsData';
import Dog from '../Dog/Dog';

class Home extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    this.getDogs();
  }

  getDogs = () => {
    dogsData.getAllDogs()
      .then((dogs) => {
        this.setState({ dogs });
      })
      .catch((errorFromGetDogs) => console.error(errorFromGetDogs));
  }

  render() {
    return (
      <div className="App">
      <div className="d-flex flex-row flex-wrap">
      <div className="col-6">
        <h1 className="text-center">Dogs</h1>
      { this.state.dogs.map((dog) => (<Dog key={dog.id} dog={dog} />))};
      </div>
      </div>
      </div>
    );
  }
}

export default Home;
