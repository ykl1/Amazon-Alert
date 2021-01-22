import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { refreshTokenSetup } from './global'
import axios from 'axios'

//const clientId = '1093455265314-a6nm1r3trfob8kfrq3k0cgnm22teja2h.apps.googleusercontent.com'
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

const Login = () => {

  const onSuccess = (res) => {
    console.log('[Login Success currentUser]:', res.profileObj)
    refreshTokenSetup(res)
    axios({
      method: "POST", 
      url: "http://localhost:9000/auth/saveuser",
      data: {
        name: res.profileObj.name, 
        email: res.profileObj.email, 
        imageUrl: res.profileObj.imageUrl
      }
    }).then(response => {
      console.log(response)
    })
  }

  const onFailure = (res) => {
    console.log('[Login failed] res:', res)
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  )
}

export default Login