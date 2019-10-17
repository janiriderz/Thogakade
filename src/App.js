import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from "./components/Navbar";
import Slidebar from './components/Slidebar';
import ReactNotifications from 'react-notifications-component';

class App extends Component {

    render() {
        return (
            <div>

                <ReactNotifications/>
                <Navbar/>

                <Slidebar/>

            </div>

        );
    }
}

export default App;
