import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from './theme';
import Layout from './components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';

function App() {
  return (
    <Theme>
      <div className="App">
        <CssBaseline />
        <Layout />
        <AppBar />
      </div>
    </Theme>
  );
}

export default App;
