import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId = '1093455265314-a6nm1r3trfob8kfrq3k0cgnm22teja2h.apps.googleusercontent.com'

const Logout = () => {
  const onSuccess = (res) => {
    alert('Logout made successfully')
  }

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  )
}

export default Logout