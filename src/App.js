import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BillingComponent from "./components/Billing";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/billings' component={BillingComponent} />
        </Switch>
    </BrowserRouter>
);

export default App;
