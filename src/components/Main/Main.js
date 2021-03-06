import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Portfolio from '../../Pages/Portfolio/Portfolio';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import './Main.scss';

import { AnimatePresence } from 'framer-motion';

const Main = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route component={ErrorPage} />
            </Switch>
        </AnimatePresence>
    )
}

export default Main;