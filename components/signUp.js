import React from 'react'
import Header from './header'

module.exports = ({state, dispatch}) => {

  const saveUsername = (e) => dispatch({type: 'NEW_USER_DETAILS', payload: {change: 'username', value: e.target.value}})

  const savePassword = (e) => dispatch({type: 'NEW_USER_DETAILS', payload: {change: 'password', value: e.target.value}})

  const authorizeSignUp = (e) => {
    e.preventDefault()
    dispatch({type: 'CHANGE_ROUTE', payload: '/play'})
  }

  return(
    <div className='signUp'>
      <Header state={state} dispatch={dispatch}/>
      <form>
        <input onChange={(e) => saveUsername(e) } type="text" placeholder="username"/>
        <input onChange={(e) => savePassword(e) } type="password" placeholder="password" />
        <button onClick={(e) => authorizeSignUp(e)} type="submit">Sign Up</button>
      </form>
    </div>
  )
}
