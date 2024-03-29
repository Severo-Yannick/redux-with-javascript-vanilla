// ACTION
const BUY_PHONE = 'BUY_PHONE'

const buyPhone = () => {
  return {
    type: BUY_PHONE
  }
}

// REDUCER
const initialState = {
  phones : 15
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BUY_PHONE:
    return {
      ...state,
      phones: state.phones - 1,
    }
    default:
      return state
  }
}

// Redux Store
const store = Redux.createStore(reducer)

// Available Phones
document.getElementById('count-phones').innerHTML = store.getState().phones

// Dispatch Action
document.getElementById('buy-phone').addEventListener('click', () => {
  store.dispatch(buyPhone())
})

// https://redux.js.org/api/store#subscribelistener
store.subscribe(() => {
  document.getElementById('count-phones').innerHTML = store.getState().phones
})
