import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import BillingComponent from "./components/Billing";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from='/' to='/billings' />
            <Route path='/billings' component={BillingComponent} />
        </Switch>
    </BrowserRouter>
);

export default App;
