import React, {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assests/css/jani-placeorderform.css';
import {Dropdown} from 'react-bootstrap';
import {Formik} from "formik";
import * as Yup from "yup";
import Inputorder from "../components/Inputorder";

export default class Placeorderform extends Component {
    onSubmit = (values) => {
        alert("Place Order Added");
        alert(JSON.stringify(values));
    };


    render() {

            const dropdown = {
            top: '23px',
            left: '23px',

        }
        const dropdown1 = {
            top: '-27px',
            left: '23px',

        }
        const dropdownname = {
            width: '157px',
        }

        const button = {
            position: 'absolute',
            left: '50px',
            top: '504px',
            width: '360px'
        }

        return (

            <Formik
                initialValues={{
                    Customer_address: '',
                    Customer_tel: '',
                    Item_price: '',
                    Item_onhand: '',
                    Item_qty: '',
                }}
                validationSchema={Yup.object().shape({
                     Customer_address: Yup.string().required(),
                    Customer_tel: Yup.string().required(),
                    Item_price: Yup.string().required(),
                    Item_onhand: Yup.string().required(),
                    Item_qty: Yup.string().required(),
                })}
                onSubmit={this.onSubmit}

                render={({handleChange, handleBlur, values, errors, handleSubmit, touched}) => (

                    <div className="jani-placeorder-main">
                        <h1 className="jani-placeorder-main-name">Placeorder Form</h1>
                        <div className="jani-placeorder-sub">
                            <div className="jani-left">
                                <div className="jani-placeorder-sub-vertical"></div>
                                <Dropdown className="jani-placeorder-sub-dropdown" style={dropdown}>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" style={dropdownname}>
                                        Customer Name
                                    </Dropdown.Toggle>


                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Sumith</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Kasun</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Ramesh</Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>
                                <br/><br/>

                                <Inputorder type="text"
                                            id="Customer_address"
                                            label="Address"
                                            value={values.Customer_address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.Customer_address && errors.Customer_address}
                                            type="text"/>

                                <br/>
                                <Inputorder type="text" className="jani-placeorder-sub-inputaddress"
                                            id="Customer_tel"
                                            label=" No"
                                            value={values.Customer_tel}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.Customer_tel && errors.Customer_tel}
                                            type="number"/>
                                <br/>
                            </div>
                            <div className="jani-right">

                                <Dropdown className="jani-placeorder-sub-dropdown" style={dropdown1}>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownname}>
                                        Item Name
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Rice</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Dhal</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Soap</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Inputorder
                                            id="Item_price"
                                            label="Price"
                                            value={values.Item_price}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.Item_price && errors.Item_price}
                                            type="number"/>
                                <br/>
                                <Inputorder
                                            id="Item_onhand"
                                            label="On Hand"
                                            value={values.Item_onhand}
                                             onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.Item_onhand && errors.Item_onhand}
                                            type="number"/>

                                <br/></div>
                                <div className="jani-qty">
                                    <Inputorder type="number"
                                                id="Item_qty"
                                                label="Qty"
                                                value={values.Item_qty}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.Item_qty && errors.Item_qty}/>
                                </div>
                            <label className="jani-quantity"> Enter Quantity :</label>
                                <button type="button" class="btn btn-outline-warning" style={button}
                                        onClick={handleSubmit}>Pay
                                </button>


                            </div>
                            <div className="jani-placeorder-sub-vertical1"></div>
                            <div className="jani-placeorder-sub-table">

                                <table className="table">
                                    <thead className="thead-light">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Item Name</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Soap</td>
                                        <td>2</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Dhal</td>
                                        <td>1kg</td>
                                        <td>300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Rice</td>
                                        <td>1kg</td>
                                        <td>50</td>
                                    </tr>
                                    </tbody>
                                </table>


                            </div>

                        </div>

                )}
            />
        );
    }
}