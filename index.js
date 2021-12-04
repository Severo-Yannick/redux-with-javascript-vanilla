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
