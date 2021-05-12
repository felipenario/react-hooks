export function numberReducer(state, action) {
    switch (action.type) {
      case "add2ValueToNumber":
        return { ...state, number: state.number + 2 };
      case 'numberTimes7':
        return {...state, number: state.number * 7};
      case "numberDividedBy25":
          return {...state, number: state.number / 25};
      case 'parseToInt':
          return {...state, number: Math.floor(parseInt(state.number))};
      case "addNToNumber":
          return {...state, number: state.number + parseInt(action.payload)};
      case "changeN":
          return {...state, n: action.payload}                
      default:
        return state;
    }
}