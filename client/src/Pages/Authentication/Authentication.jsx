import React, {useState} from 'react'
import './Authentication.css'
import LogoBig from '../../images/LogoBig.png'

const Authentication = () => {
    const [isSignUp, setIsSignUp] = useState(false)

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
            <form action="" className="infoForm AuthenticationForm">
                <h3>{isSignUp ? "Sign up" : "Log in"}</h3>

                {isSignUp && 
                    <div>
                        <input type="text" placeholder='First Name' className='infoInput' name='firstname'/>
                        <input type="text" placeholder='Last Name' className='infoInput' name='lastname'/>
                    </div>
                }
                
                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username'/>
                </div>
                <div>
                    <input type="text" placeholder='Password' className='infoInput' name='password'/>
                    {isSignUp && <input type="text" placeholder='Confirm Password' className='infoInput' name='confirmpassword'/>}
                </div>
                <div>
                    <span onClick={() => setIsSignUp(!isSignUp)} style={{fontSize: '12px', cursor: "pointer"}}> {isSignUp ? 'Already have an account? Log in!' : "Don't have and account? Sign up!"}</span>
                </div>
                <button className="button infoButton" type='submit'>
                    {isSignUp ? 'Sign up' : 'Log in'}
                </button>
                
            </form>
        </div>
    </div>
  )
}

function LogIn() {
    return (
        <div className="a-right">
            <form action="" className="infoForm AuthenticationForm">
                <h3>Log in</h3>
                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username'/>
                </div>
                <div>
                    <input type="text" placeholder='Password' className='infoInput' name='password'/>
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>Don't have an account? Sign up</span>
                <button className="button infoButton" type='submit'>
                    Log in
                </button>
                </div>
                
            </form>
        </div>
    )
}

function SignUp() {
    return (
        <div className="a-right">
            <form action="" className="infoForm AuthenticationForm">
                <h3>Sign up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstname'/>
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname'/>
                </div>
                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username'/>
                </div>
                <div>
                    <input type="text" placeholder='Password' className='infoInput' name='password'/>
                    <input type="text" placeholder='Confirm Password' className='infoInput' name='confirmpassword'/>
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>Already have an account? Log in</span>
                </div>
                <button className="button infoButton" type='submit'>
                    Sign up
                </button>
                
            </form>
        </div>
    )
}

export default Authentication