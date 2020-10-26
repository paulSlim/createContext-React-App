import React, { PureComponent } from 'react';
import { AppContext, defaultObject } from './AppContext';

import './App.css';
import LogPanel from './LogPanel';


const loggedInMessage = <p>You signed in correctly!</p>;

class App extends PureComponent {
  state = {
    isUserLoggedIn: defaultObject.isUserLoggedIn,
  }

  toggleLoggedIn = () => {
    this.setState({
      isUserLoggedIn: !this.isUserLoggedIn,
    });
  }

  render() {
    const LogPanelComponent = (
      <AppContext.Provider value={{
        isUserLoggedIn: this.state.isUserLoggedIn,
        toggleLoggedIn: this.toggleLoggedIn,
      }}>
        <LogPanel />
      </AppContext.Provider>
    )
    return (
      <div>
        { this.state.isUserLoggedIn ? loggedInMessage : LogPanelComponent}
      </div>
    );
  }
}

export default App;
