import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route}from 'react-router-dom'
import store from './store';
import './main.css';

import Home from './view/home';
import Login from './view/login';
import BackofficeHome from './view/backoffice/';
import BackofficeTags from './view/backoffice/tags';
import BackofficeTagsNew from './view/backoffice/tags-new';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/backoffice/' component={BackofficeHome} />
        <Route exact path='/backoffice/tags' component={BackofficeTags} />
        <Route exact path='/backoffice/tagsadd' component={BackofficeTagsNew} />
      </Router>
    </Provider>
  );
}

export default App;
