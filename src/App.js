import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from './theme';
import Layout from './components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';
import * as actionTypes from './store/actions/actionTypes';
import './index.css';

const App = props => {
  return (
    <Theme>
      <div className="App">
        <CssBaseline />
        <Layout />
        
        <AppBar 
          changeTeamOrder={props.changeTeamOrder}
          removePkmn={props.removePkmnFromTeam}
          pokemonTeam={props.pokemonTeam} 
          changeGen={(gen) => props.genClick(gen)} />
      </div>
    </Theme>
  );
}
const mapStateToProps = state => ({
  pokemonTeam: state.pokemonTeam,
  currentGen: state.selectedGen
})

const mapDispatchToProps = dispatch => ({
  removePkmnFromTeam: (id) => dispatch({type: actionTypes.REMOVE_FROM_TEAM, id: id}),
  genClick: (gen) => dispatch({ type: actionTypes.CHANGE_GEN, selectedGen: gen }),
  changeTeamOrder: (newTeam) => dispatch({type: actionTypes.CHANGE_TEAM_POSITION, newTeam: newTeam})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
