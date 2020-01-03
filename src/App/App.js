import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../Helpers/Data/Connection';
import MyNavBar from '../Components/MyNavBar/MyNavBar';
import Auth from '../Components/Auth/Auth';
import Home from '../Components/Home/Home';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  renderView = () => {
    const { authed } = this.state;

    if (!authed) {
      return (< Auth />);
    }
    return (< Home />);
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
      <MyNavBar authed={authed} />
      {
     this.renderView()
      }
    </div>
    );
  }
}

export default App;
