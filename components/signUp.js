import React from 'react'
import Header from './header'
import signupService from '../services/signup'

module.exports = ({state, dispatch}) => {
  const saveUsername = (e) => dispatch({type: 'NEW_USER_DETAILS', payload: {change: 'username', value: e.target.value}})

  const savePassword = (e) => dispatch({type: 'NEW_USER_DETAILS', payload: {change: 'password', value: e.target.value}})

  const saveEmail = (e) => dispatch({type: 'NEW_USER_DETAILS', payload: {change: 'email', value: e.target.value}})

  const authorizeSignUp = (e) => {
    e.preventDefault()
    signupService(state, dispatch)
  }
  console.log(state.newUserDetails)
  return (
    <div className='signUp'>
      <Header state={state} dispatch={dispatch} />
      <form>
        <input onChange={(e) => saveUsername(e)} type='text' placeholder='Username' />
        <input onChange={(e) => saveEmail(e)} type='text' placeholder='Email' />
        <input onChange={(e) => savePassword(e)} type='password' placeholder='Password' />
        <button onClick={(e) => authorizeSignUp(e)} type='submit'>Sign Up</button>
      </form>
    </div>
  )
}
