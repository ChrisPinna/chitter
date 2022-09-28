import React, { useState } from 'react'
import './Authentication.css'
import LogoBig from '../../images/LogoBig.png'
import { useDispatch } from 'react-redux'


const Authentication = () => {
    const dispatch = useDispatch();
    const [isSignUp, setIsSignUp] = useState(true)

    const [data, setData] = useState({
        username: "", 
        firstname: "", 
        lastname: "", 
        password: "", 
        confirmpassword: ""
    })

    const [confirmPassword, setConfirmPassword] = useState(true)

    const handleChange = (e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            data.password === data.confirmpassword ? dispatch(signUp(data)) : setConfirmPassword(false);
        } else {
            dispatch(logIn(data));
        };
    };

    const resetForm = () => {
        setConfirmPassword(true);
        setData({
            username: "",
            firstname: "",
            lastname: "",
            password: "",
            confirmpassword: ""
        });
    };

  return (
    <div className="Authentication">
        {/* Left Side */}
        <div className="a-left">
            <img src={LogoBig} alt="" />
            <div className="Webname">
                <h1>Chitter</h1>
                <h6>Interct with other peoples ideas!</h6>
            </div>
        </div>
        {/* Right Side */}
        <div className="a-right">
            <form action="" className="infoForm AuthenticationForm" onSubmit={handleSubmit}>
                <h3>{isSignUp ? "Sign up" : "Log in"}</h3>

                {isSignUp && 
                    <div>
                        <input type="text" 
                            placeholder='First Name' 
                            className='infoInput' 
                            name='firstname' 
                            onChange={handleChange}
                            value={data.firstname}

                        />

                        <input type="text" 
                            placeholder='Last Name' 
                            className='infoInput' 
                            name='lastname' 
                            onChange={handleChange}
                            value={data.lastname}

                        />
                    </div>
                }
                
                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username' onChange={handleChange}/>
                </div>

                <div>
                    <input type="password" placeholder='Password' className='infoInput' name='password' onChange={handleChange}/>
                    {isSignUp && <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmpassword' onChange={handleChange}/>}
                </div>

                <span style={{color: "red", fontSize: '12px', display: confirmPassword ? "none" : "block"}} >Those passwords didn't match. Try again.</span>

                <div>
                    <span onClick={() => {
                        setIsSignUp(!isSignUp);
                        resetForm();
                        }} 
                        style={{
                            fontSize: '12px', 
                            cursor: "pointer"
                        }}
                        >{isSignUp ? 'Already have an account? Log in!' : "Don't have and account? Sign up!"}
                    </span>
                </div>

                <button className="button infoButton" type='submit'>
                    {isSignUp ? 'Sign up' : 'Log in'}
                </button>
                
            </form>
        </div>
    </div>
  )
}

export default Authentication