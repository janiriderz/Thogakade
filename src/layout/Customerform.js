import React, {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assests/css/jani-customerform.css';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Input from '../components/Input';



export default class Customerform extends Component {
    onSubmit = (values) => {

        alert("Customer Added");
        alert(JSON.stringify(values));
    };


    render() {

        return (
            <Formik
                initialValues={{
                    Name: '',
                    Address: '',
                    Mobile_No: '',
                }}
                validationSchema={Yup.object().shape({
                    Name: Yup.string().required(),
                    Address: Yup.string().required(),
                    Mobile_No: Yup.string().required(),
                })}
                onSubmit={this.onSubmit}

                render={({handleChange, handleBlur, values, errors, handleSubmit, touched}) => (

                    <div className="jani-customerform-main">
                        <h1 className="jani-customerform-main-name">Customerform</h1>
                        <div className="jani-customerform-sub">

                          <form>
                                <div className="form-group" className="jani-customerform-name">
                                    <Input
                                        id="Name"
                                        label=" Customer Name"
                                        value={values.Name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.Name && errors.Name}
                                        type="text"
                                        className="form-control" placeholder="Enter Name"/>
                                </div>
                                <div className="form-group" className="jani-customerform-name">

                                    <Input
                                        type="text"
                                        id="Address"
                                        label=" Customer Address"
                                        value={values.Address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.Address && errors.Address}
                                        className="form-control" placeholder="Enter Address"/>
                                </div>
                                <div className="form-group" className="jani-customerform-name">
                                    <Input
                                        id="Mobile_No"
                                        label=" Customer Mobile No"
                                        value={values.Mobile_No}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.Mobile_No && errors.Mobile_No}
                                        type="number"
                                        className="form-control" placeholder="Enter Mobile Number"/>
                                </div>

                                <div className="form-group" className="jani-customerform-button">
                                    <button type="button" className="btn btn-outline-primary"
                                            onClick={handleSubmit}>Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                )}
            />
        );
    }
}