import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from './theme';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Theme>
      <div className="App">
        <CssBaseline />
        <Layout />

      </div>
    </Theme>
  );
}

export default App;
