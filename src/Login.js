import React, {useState } from "react";
import Alert from 'react-bootstrap/Alert';

    const Login=()=> {
        const [email,setEmail]= useState('');
        const [password,setPassword]= useState('');
        const [users,setUsers]= useState([]);
        const [empty,setEmpty]= useState(false);

        const handleSubmit =(e)=>{
            e.preventDefault();
            if(email!=='' && password!==''){
                setEmpty(false);
                const user= {email: email, password: password};
                setUsers((users)=>{return [...users,user];});
                console.log(users);

            }
            else{ setEmpty(true);}
        }
        return (
            <div className="background">
            <div className="login">
            <form className="form" onSubmit={handleSubmit}>
                <h1 >Sign In</h1>{empty &&
                <Alert show={true}  variant='danger'  
                    fade="ture" style={{textAlign : "center", fontSize: "3em"}}>
                    Please Enter Email and Password!
                    </Alert> }


                <div className="form-group">
                    <label htmlFor="email" >Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email"  value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password" >Password:</label>
                    <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value);}} placeholder="Enter password" />
                </div>

                <div className="form-group">
    <div className="custom-control-lg custom-control custom-checkbox">
        <input className="custom-control-input" id="checkbox-large" type="checkbox"/>
        <label className="custom-control-label" htmlFor="checkbox-large">
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
export default Login;