import React from "react";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";



const Login = () => {

    let history = useHistory();

    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        history.push("/Home");
    }


    return(
        <div>
            <div className="container">
                <div className="row" >
                  <div className="col-sm-9 col-md-7  mx-auto">
					 <div className="card my-5">
						<div className="card-body">
                           <form onSubmit={handleSubmit(onSubmit)} >
                             <div className="form-group">
                                <input className="form-control" name="username" type="text" ref={register} placeholder="Enter username..." />
                                <input className="form-control" name="password" type="password" ref={register} placeholder="Enter password..." />
                                <input className="btn btn-primary btn-lg btn-block" type="submit" />
                             </div>
                            </form>
                        </div>
                      </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Login;

