import React from 'react'
import Menu from './menu'
import signupService from '../services/signup'
import Logo from './logo'

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
      <Menu state={state} dispatch={dispatch} />
      <Logo />
      <div className='containerWithLogo'>
        <form>
          <input onChange={saveUsername} type='text' placeholder='Username' />
          <input onChange={saveEmail} type='text' placeholder='Email' />
          <input onChange={savePassword} type='password' placeholder='Password' />
          <button className='buttons' onClick={authorizeSignUp} type='submit'>Sign Up</button>
        </form>
        <button className='buttons' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/'})} type='submit'>Cancel</button>
      </div>
    </div>
  )
}
