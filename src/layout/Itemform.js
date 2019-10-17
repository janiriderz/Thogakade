import React, {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assests/css/jani-itemform.css';
import {Formik} from "formik";
import * as Yup from "yup";
import Input from "../components/Input";

export default class Itemform extends Component {
    onSubmit = (values) => {
        alert("Item Added");
        alert(JSON.stringify(values));
    };

    render() {
        return (

            <Formik
                initialValues={{
                    Name: '',
                    Price: '',
                    Quantity: '',
                }}
                validationSchema={Yup.object().shape({
                    Name: Yup.string().required(),
                    Price: Yup.string().required(),
                    Quantity: Yup.string().required(),
                })}
                onSubmit={this.onSubmit}

                render={({handleChange, handleBlur, values, errors, handleSubmit, touched}) => (


                    <div className="jani-itemform-main">
                        <h1 className="jani-itemform-main-name">Itemform</h1>
                        <div className="jani-itemform-sub">
                            <form>
                                <div className="form-group" className="jani-itemform-name">
                                    <Input
                                        id="Name"
                                        label="Item Name"
                                        value={values.Name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.Name && errors.Name}
                                        type="text"
                                        className="form-control" placeholder="Enter Item Name"/>
                                </div>
                                <div className="form-group" className="jani-itemform-name">

                                    <Input
                                        type="number"
                                        id="Price"
                                        label="Item Price"
                                        value={values.Price}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.Price && errors.Price}
                                        className="form-control" placeholder="Enter Price"/>
                                </div>
                                <div className="form-group" className="jani-itemform-name">
                                    <Input
                                        id="Quantity"
                                        label="Item Quantity"
                                        value={values.Quantity}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.Quantity && errors.Quantity}
                                        type="number"
                                        className="form-control" placeholder="Enter Quantity"/>
                                </div>

                                <div className="form-group" className="jani-itemform-button">
                                    <button type="button" className="btn btn-outline-primary" onClick={handleSubmit}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            />
        );
    }
}