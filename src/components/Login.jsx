import React, { useState } from 'react'
import Register from "../assets/images/signup.jpg"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
   const navigate= useNavigate()
    const [credential, setCredential] = useState({

        email: "",
        password: ""

    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credential
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })

        });
        const json = await response.json()
        setCredential({

            email: "",
            password: "",

        })

        console.log('this is response ', json);
        if (json) {
            localStorage.setItem('token', json.authToken)
            navigate('/')

        }
    };
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={Register} className="card-img-top" alt="..." />
                    </div>
                    <div className='col-md-6'>
                        <h4>login to visit website</h4>
                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' value={credential.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name='password' value={credential.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                            </div>


                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p>not register? <Link to="/signup">Sign up</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
