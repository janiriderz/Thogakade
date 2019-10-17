import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Customerform from '../layout/Customerform';
import Itemform from '../layout/Itemform';
import Placeorderform from '../layout/Placeorderform';
import Dashboard from '../layout/Dashboard';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assests/css/jani-slidebar.css';

export default class Slidebar extends Component {

    render() {
        return (
            <Router>
                <div className="jani-slidebar">

                    <div className="jani-slidebar-logo">
                        <div className="jani-slider-logo-avatar"></div>
                        <h1>.</h1><h6>Online</h6>
                        <h5>Janith Prabodhana</h5>
                    </div>


                    <div className="jani-sidebar-menu">
                        <Link to={"../dashboard"} className="jani-sidebar-menu-letters1">Dashboard</Link>
                    </div>
                    <div className="jani-sidebar-menu">
                        <Link to={"../customerform"} className="jani-sidebar-menu-letters2">Customers</Link>
                    </div>
                    <div className="jani-sidebar-menu">
                        <Link to={"../itemform"} className="jani-sidebar-menu-letters3">Items</Link>
                    </div>
                    <div className="jani-sidebar-menu">
                        <Link to={"../placeorder"} className="jani-sidebar-menu-letters4">Orders</Link>
                    </div>


                </div>

                <Switch>
                    <Route exact path='/dashboard' component={Dashboard}/>
                    <Route exact path='/customerform' component={Customerform}/>
                    <Route exact path='/itemform' component={Itemform}/>
                    <Route exact path='/placeorder' component={Placeorderform}/>
                </Switch>

            </Router>


        );
    }
}
