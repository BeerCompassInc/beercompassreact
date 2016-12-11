import test from 'tape'
import reducer from '../../reducer'

test('tests are hooked up', (t) => {
  t.ok('tests are a go')
  t.end()
})
test('test change route reducer', (t) => {
  const state = {
    route: '/',
  }
  const expected = {
    route: '/signup',
  }
  const actual = reducer(state, {type: 'CHANGE_ROUTE', payload: '/signup'})
  t.deepEquals(actual, expected, 'changing a route works')
  t.end()
})
