import React from 'react'
import Header from './header'

module.exports = ({state, dispatch}) => {

  const goToSignUp = () => dispatch({type: 'CHANGE_ROUTE', payload: '/signUp'})

  const saveUsername = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'username', value: e.target.value}})

  const savePassword = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'password', value: e.target.value}})

  const login = (e) => {
    e.preventDefault()
    dispatch({type: 'CHANGE_ROUTE', payload: '/play'})
}
  return(
    <div className='login'>
      <Header state={state} dispatch={dispatch}/>
      <form>
        <input onChange={(e) => saveUsername(e) } type="text" placeholder="Username"/>
        <input onChange={(e) => savePassword(e) } type="password" placeholder="Password" />
        <button onClick={(e) => login(e)} type="submit" className="loginButton">Login</button>
      </form>
      <button onClick={goToSignUp}>Create Account</button>
    </div>
  )
}
