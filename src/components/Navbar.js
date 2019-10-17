import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assests/css/jani-navbar.css';
import {store} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export default class Navbar extends Component {

    // handleClick1=()=>{
    //     alert("No Messages!!!")
    // }
    // handleClick2=()=>{
    //     alert("No Notification!!!")
    // }
    // handleClick3=()=>{
    //     alert("No Tasks!!!")
    // }
    render() {
        return (
            <div className="jani-navbar">
                <input type="text" className="jani-navbar-search" placeholder="Search"/>
                {/*<button className="jani-navbar-search-button">Search</button>*/}
                <div className="jani-navbar-logo"></div>
                <button className="jani-navbar-message"
                        onClick={() => {
                            store.addNotification({
                                title: 'Messages',
                                message: 'Loading 4 Active Messages  .',
                                type: 'success',
                                container: 'bottom-left',
                                animationIn: ["animated", "fadeIn"],
                                animationOut: ["animated", "fadeOut"],
                                dismiss: {
                                    duration: 4000
                                }
                            })
                        }}
                >
                    <span className="label-message ">4</span>
                </button>
                <button className="jani-navbar-notification"
                        onClick={() => {
                            store.addNotification({
                                title: 'Notifications',
                                message: 'New 8 Notifications Unread .',
                                type: 'warning',
                                container: 'bottom-left',
                                animationIn: ["animated", "fadeIn"],
                                animationOut: ["animated", "fadeOut"],
                                dismiss: {
                                    duration: 4000
                                }
                            })
                        }}
                >
                    <span className="label-notification ">8</span>
                </button>
                <button className="jani-navbar-task"
                        onClick={() => {
                            store.addNotification({
                                title: 'Tasks',
                                message: '5 Current Tasks Not loaded.',
                                type: 'default',
                                container: 'bottom-left',
                                animationIn: ["animated", "fadeIn"],
                                animationOut: ["animated", "fadeOut"],
                                dismiss: {
                                    duration: 4000
                                }
                            })
                        }}
                >
                    <span className="label-task ">5</span>
                </button>


                <div className="jani-navbar-avatar"></div>


            </div>
        );
    }
}