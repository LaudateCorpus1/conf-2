import React from 'react';
/* import { BrowserRouter, Switch, Route } from 'react-router-dom'; */
import { Router } from '@reach/router'
import Home from  '../pages/Home'
import About from  '../pages/About'
import Services from  '../pages/Services'
import NotFound from  '../pages/NotFound'
import Contact from  '../pages/Contact'
import Layout from '../pages/Layout';
import DetailService from '../pages/DetailService';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App ()  {
  const initialState = useInitialState()

  return (
 
      <AppContext.Provider value={initialState}>
        <Layout>

          <Router>
          <NotFound default />
          <Home exact path="/" />
          <About exact path="/conoceme" />
          <Services exact path="/servicios" />
          <DetailService exact path="/servicio/:id" />
          <Contact exact path="/contacto" />
          </Router>
        </Layout>
        </AppContext.Provider>
  );
}

export default App;
