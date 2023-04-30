import React, {Fragment, useRef} from 'react';
import {useNavigate} from "react-router-dom";

const SendOTP = () => {

    let emailRef=useRef();
    let navigate=useNavigate();

    return (
        <Fragment>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90">
                            <div className="card-body text-start">
                                <h4>EMAIL ADDRESS</h4>
                                <hr/>
                                <label>Your email address</label>
                                <input ref={(input)=>emailRef=input}  placeholder="User Email" className="form-control" type="email"/>
                                <br/>
                                <button  className="btn w-100 btn-success">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SendOTP;