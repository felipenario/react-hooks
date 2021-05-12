import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import {initialState, reducer} from '../../store'
import {numberTimes7, numberDividedBy25, parseToInt, addNToNumber, add2ValueToNumber, changeN, login} from '../../store/actions'



const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}
        <span className="text">{state.number}</span>
        <input type="number" className="input" value={state.n} onChange={e => changeN(dispatch, e.target.value)}/>
        <div>
        <button
            className="btn"
            onClick={() => numberTimes7(dispatch)}
          >
            * 7
          </button>
          <button
            className="btn"
            onClick={() => numberDividedBy25(dispatch)}
          >
            / 25
          </button>
          <button
            className="btn"
            onClick={() => parseToInt(dispatch)}
          >
            Converter para inteiro.
          </button>
          <button
            className="btn"
            onClick={() => addNToNumber(dispatch, state.n)}
          >
            Adicionar o número do N do textfield.
          </button>
          <button
            className="btn"
            onClick={() => login(dispatch, 'Felipe Nário')}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => add2ValueToNumber(dispatch)}
          >
            +2
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
