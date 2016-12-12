import React from 'react'
import Header from './header'
import signupService from '../services/signup'

module.exports = ({ state, dispatch }) => {
  const saveUsername = (e) => dispatch({type: 'NEW_USER_DETAILS', payload: {change: 'username', value: e.target.value}})
  const savePassword = (e) => dispatch({type: 'NEW_USER_DETAILS', payload: {change: 'password', value: e.target.value}})
  const saveEmail = (e) => dispatch({type: 'NEW_USER_DETAILS', payload: {change: 'email', value: e.target.value}})
  const authorizeSignUp = (e) => {
    e.preventDefault()
    signupService(state, dispatch)
  }
  return (
    <div className='signUp'>
      <Header state={state} dispatch={dispatch} />
      <form>
        <input onChange={saveUsername} type='text' placeholder='Username' />
        <input onChange={saveEmail} type='text' placeholder='Email' />
        <input onChange={savePassword} type='password' placeholder='Password' />
        <button onClick={authorizeSignUp} type='submit'>Sign Up</button>
      </form>
    </div>
  )
}
