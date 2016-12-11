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
  console.log(state.loginDetails);
  return (
    <div className='login'>
      <Header state={state} dispatch={dispatch} />
      <form>
        <input onChange={(e) => saveUsername(e)} type='text' placeholder='Username' />
        <input onChange={(e) => savePassword(e)} type='password' placeholder='Password' />
        <button onClick={(e) => loginButton(e)} type='submit'>Login</button>
      </form>
      <button onClick={goToSignUp}>Create Account</button>
    </div>
  )
}
