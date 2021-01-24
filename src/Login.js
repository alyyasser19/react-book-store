import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="background">
            <div className="login">
            <form className="form">
                <h1 >Sign In</h1>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
    <div class="custom-control-lg custom-control custom-checkbox">
        <input class="custom-control-input" id="checkbox-large" type="checkbox"/>
        <label class="custom-control-label" for="checkbox-large">
            Remember Me?
        </label>
    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" style={{fontSize: "xx-large"}}>
                Submit
                </button>
            </form>
            </div>
            </div>

        );
    }
}