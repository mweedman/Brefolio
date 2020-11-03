import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingView from '../Landing/LandingView';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import ContentContext from '../../Contexts/ContentContext';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  static contextType = ContentContext;

  closeModal = () => {
    this.context.closeModal();
  }

  render(){
    return (
      <div className="App">
        {this.context.show && <Modal />}
        <div className="content" onClick={this.closeModal}>
          <Header />
          <Switch>
            <Route exact path={'/'} component={LandingView} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
