
import {reducer} from './reducers'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // O foco será nesse atributo
    number: 0,
    n: 0,
}

export {
  reducer,
  initialState,
}