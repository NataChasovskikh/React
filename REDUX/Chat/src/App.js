import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import SidePanel from './sidePanel';
import ColorPanel from './colorPanel';
import MassagePanel from './massegePanel';
import MetaPanel from './metaPanel';
import Form from './form';
import s from './App.module.css';


class App extends Component {
  render() {
    return (
    <div>
      <Grid className={s.app}>
        <Grid.Column style={{maxWidth:450}}>
          <Form/>
        </Grid.Column>
      </Grid>
      <Grid columns={4} divided>    
          <Grid.Column width={1}>
            <SidePanel/>
          </Grid.Column>
          <Grid.Column width={2}>
            <ColorPanel/>
          </Grid.Column >
          <Grid.Column width={8}>
            <MassagePanel/>
          </Grid.Column>   
          <Grid.Column width={3}>
            <MetaPanel/>
          </Grid.Column>
      </Grid>
    </div>
    );
  }
};

// const mstp = (state) => {
//   currentUser: state.user.currentUser,
//   currentCanel: state.cannel.currentCannel,
//   isPrivetCanel: state.cannel.isPrivetCanel
// }

// export default connect(mstp)(App);

export default App;