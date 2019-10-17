import React, {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assests/css/jani-dashboard.css';
import Chart2 from '../components/charts/Line Chart';

export default class Dashboard extends Component {


    render() {

        return (
            <div>

                <div className="jani-dashboard-main">
                <h1 className="jani-dashboard-main-name">Dashboard</h1>
                <div className="chart-background"></div>
                <div className="chart">
                    <Chart2/></div>
                </div>


            </div>


        )
            ;
    }
}
