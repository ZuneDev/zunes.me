import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';

import Home from './pages/Home'
import Header from './components/Header'
import Footer from "./components/Footer";
import JoinTheSocial_default from "./pages/en-US/promotions/JoinTheSocial_default";
import Software_default from "./pages/en-US/products/software/default";
import Software_download_default from "./pages/en-US/products/software/download/default";
import Terms_of_service from "./pages/en-US/legal/termsofservice";
import PageNotFound from "./pages/PageNotFound";

const ReactRouterDOM = require('react-router-dom');
const {Switch, Route, Redirect} = ReactRouterDOM;
const Router = ReactRouterDOM.BrowserRouter;

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <div className="App XbcShellMain">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path={`/en-US/promotions/jointhesocial/:type`} component={JoinTheSocial_default}/>
                    {/*<Redirect exact from='/blog/' to="/tutorials/" />*/}
                    {/*<Route path="/tutorials/" component={About} />*/}
                    <Route exact path="/en-US/products/software/download/:page" component={Software_download_default}/>
                    <Route exact path="/en-US/products/software/:page" component={Software_default}/>
                    <Route exact path="/en-US/legal/termsofservice.htm" component={Terms_of_service}/>

                    <Route path="/" component={PageNotFound}/>
                </Switch>
            </Router>

            <Footer/>
        </div>
        <div style={{marginLeft: "auto", marginRight: "auto"}}>

        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
