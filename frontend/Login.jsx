import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { refreshTokenSetup } from './global'

const clientId = '1093455265314-a6nm1r3trfob8kfrq3k0cgnm22teja2h.apps.googleusercontent.com'

const Login = () => {

  const onSuccess = (res) => {
    console.log('[Login Success currentUser]:', res.profileObj)
    refreshTokenSetup(res)
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