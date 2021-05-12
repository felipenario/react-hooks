function numberTimes7(dispatch) {
    dispatch({ type: "numberTimes7"})
}

function numberDividedBy25(dispatch) {
    dispatch({ type: "numberDividedBy25"})
}

function parseToInt(dispatch) {
    dispatch({ type: "parseToInt"})
}

function addNToNumber(dispatch, n) {
    dispatch({ type: "addNToNumber", payload: n})
}

function add2ValueToNumber(dispatch) {
    dispatch({ type: "add2ValueToNumber" })
}

function changeN(dispatch, newNValue) {
    console.log(newNValue)
    dispatch({type: "changeN", payload: newNValue})
}

export {
    numberTimes7,
    numberDividedBy25,
    parseToInt,
    addNToNumber,
    add2ValueToNumber,
    changeN
}