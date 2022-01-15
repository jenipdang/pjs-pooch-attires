import React from 'react'
import Signin from './Signin'
import Signup from './Signup'

const Account = () => {
    return (
        <div>
            <h2>Sign In or Create An Account</h2>
            <p>With an account you can check out faster, view your online order history and access your shopping bag or saved items from any devices.</p>
            <Signin />
            <Signup />
        </div>
    )
}

export default Account
