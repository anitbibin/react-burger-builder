import * as React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import './App.scss';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

const App: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Layout>
                <Switch>
                    <Route path="/orders" component={Orders} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/" component={BurgerBuilder} />
                </Switch>
            </Layout>
        </React.Fragment>
    );
};

export default App;