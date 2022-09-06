import React from 'react'
import './Authentication.css'
import LogoBig from '../../images/LogoBig.png'

const Authentication = () => {
  return (
    <div className="Authentication">
        <div className="a-left">
            <img src={LogoBig} alt="" />
            <div className="Webname">
                <h1>Chitter</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>

        <LogIn/>
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