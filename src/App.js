import React, {useState,useEffect} from "react";
import Header from './components/Header';
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import OutcomeList from "./components/OutcomeList";
import OutcomeForm from "./components/OutcomeForm";

function App() {
  const [outcome,setOutcome] = useState([]);
  const [income,setIncome] = useState([]);
  const [totalIncome,setTotalIncome] = useState(0);
  const [untotalIncome,setunTotalIncome] = useState(0);

  useEffect(() => {
    let temp = 0;
    let untemp = 0; 
    for(let i = 0; i < income.length; i++)
    {
      if(income[i].price > 0)
      {temp += parseInt(income[i].price)}
      else
      untemp += parseInt(income[i].price);
    }
    setTotalIncome(temp);
    setunTotalIncome(untemp)
  },[income])

  useEffect(() => {
    let temp = 0;
    let untemp = 0; 
    for(let i = 0; i < outcome.length; i++)
    {
      if(outcome[i].price > 0)
      {temp += parseInt(outcome[i].price)}
      else
      untemp += parseInt(outcome[i].price);
    }
    setTotalIncome(temp);
    setunTotalIncome(untemp)
  },[outcome])

  return (
    <div className="App">
      <Header totalIncome={totalIncome} untotalIncome={untotalIncome}/>
      <IncomeForm income={income} setIncome={setIncome}></IncomeForm>
      { (income.length > 0 ) ? income[0].desc : " "}
      <OutcomeForm outcome={outcome} setOutcome={setOutcome}></OutcomeForm>
      <h1>List</h1>
      <IncomeList income={income} setIncome={setIncome}></IncomeList>
      <h1>Out List</h1>
      <OutcomeList outcome={outcome} setOutcome={setOutcome}></OutcomeList>
    </div>
  );
}

export default App;
