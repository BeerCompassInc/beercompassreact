import React from 'react'
import Header from './header'
import loginService from '../services/login'

module.exports = ({state, dispatch}) => {
  const goToSignUp = () => dispatch({type: 'CHANGE_ROUTE', payload: '/signUp'})
  const saveUsername = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'username', value: e.target.value}})
  const savePassword = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'password', value: e.target.value}})
  const loginButton = (e) => {
    e.preventDefault()
    dispatch({type: 'CHANGE_ROUTE', payload: '/loading'})

    setTimeout(() => {
      loginService(state, dispatch)
    }, 1000)
  }

  return (
    <div className='login'>
      <Header state={state} dispatch={dispatch} />
      <form>
        <input onChange={saveUsername} type='text' placeholder='Username' />
        <input onChange={savePassword} type='password' placeholder='Password' />
        <button onClick={loginButton} type='submit'>Login</button>
      </form>
      <button onClick={goToSignUp}>Create Account</button>
    </div>
  )
}
