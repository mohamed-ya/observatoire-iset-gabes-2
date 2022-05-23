import React, { useState } from 'react'
import BtnLogin from './BtnLogin'

const Credential = ({providers, csrfToken}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <BtnLogin 
      provider={providers.credentials}
      bgColor='#22b05b'
      csrfToken="sign in"
      options={{redirect: false, email, password}}
    >
      <div>
        <label>Email address</label>
        <input type="email" name="email"
        className="form-control w-100"
        placeholder="email@example.com" required
        value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div>
        <label htmlFor="password">email iset</label>
        <input type="email" id="password" name="password"
        className="form-control w-100"  required
        value={password} onChange={e => setPassword(e.target.value)} />
      </div>
    </BtnLogin>
  )
}

export default Credential
