import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route}from 'react-router-dom'
import store from './store';

import Home from './view/home';
import Login from './view/login';
import BackofficeTagsNew from './view/backoffice/tags-new';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/backoffice/tags' component={BackofficeTagsNew} />
      </Router>
    </Provider>
  );
}

export default App;
