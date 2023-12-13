
import React from 'react'

const Login = () => {
    return (
        <div>
            <form action="submit">
                <input type="text" placeholder='Enter Username' />
                <input type="text" placeholder='Enter Password' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;