import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/portfolio/:id" component={PortfolioItemPage} />
      <Route exact path="/portfolio" component={PortfolioPage} />
      <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;