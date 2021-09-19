import './App.css';
import React from 'react';
import MultiAxisLine from './charts/MultiAxisLine.js';
import HorizontalBar from './charts/HorizontalBar.js';

const data = {
  labels:['React', 'React-native', 'Node']
}

const App = () => (
  <Router>
    <div className='content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/horizontal-bar' component={HorizontalBar} />
        <Route exact path='/multi-axis-line' component={MultiAxisLine} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
