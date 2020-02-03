import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { UserAccessContext, UserAccessProvider } from './context/LanguageContext'
import { UserAccessContext } from './context/LanguageContext'

import Layout from './layout/Layout'
import Home from './pages/Home';
import Profile from './pages/Profile';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lang: 'id' }
  }

  componentDidMount() {
  }

  render() {
    console.log(this.state.lang);

    return (
      <Router>
        <Layout>
          <Route lang={this} path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
        </Layout>
      </Router >
    )
  }
}

