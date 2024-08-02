import React from 'react';
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome back,</h2>
            <form>
                <input type="email" placeholder='Email' name='email' />
                <input type="password" placeholder='Password' name="password" id="" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create an Account</h2>
            <form>
                <label htmlFor="file">Upload an Image</label>
                <input type="file" name="file" id="file" />
                <input type="text" placeholder='Username' name='username' />
                <input type="email" placeholder='Email' name='email' />
                <input type="password" placeholder='Password' name="password" id="" />
                <button>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login