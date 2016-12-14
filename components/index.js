import React from 'react'
import Menu from './menu'
import Logo from './logo'
import loginService from '../services/login'

module.exports = ({ state, dispatch }) => {
  const goToSignUp = () => dispatch({type: 'CHANGE_ROUTE', payload: '/signUp'})
  const saveUsername = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'username', value: e.target.value}})
  const savePassword = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'password', value: e.target.value}})
  const loginButton = (e) => {
    e.preventDefault()
    dispatch({type: 'CHANGE_ROUTE', payload: '/loading'})
    loginService(state, dispatch)
  }
  return (
    <div>
      <Menu state={state} dispatch={dispatch} />
      <Logo />
      <div className='login containerWithLogo'>
        <form>
          <input onChange={saveUsername} type='text' placeholder='Username' />
          <input onChange={savePassword} type='password' placeholder='Password' />
          <button className='buttons' onClick={loginButton} type='submit'>Login</button>
        </form>
        <button className='buttons' onClick={goToSignUp}>Create Account</button>
      </div>
    </div>
  )
}
