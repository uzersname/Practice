import React, {useState,useEffect} from "react";
import Header from './components/Header';
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";

function App() {
  const [income,setIncome] = useState([]);
  const [totalIncome,setTotalIncome] = useState(0);

  useEffect(() => {
    let temp = 0;
    for(let i = 0; i < income.length; i++)
    {
      temp += parseInt(income[i].price)
    }
    setTotalIncome(temp);
  },[income])
  return (
    <div className="App">
      <Header totalIncome={totalIncome}/>
      <IncomeForm income={income} setIncome={setIncome}></IncomeForm>
      { (income.length > 0 ) ? income[0].desc : " "}
      <IncomeList income={income} setIncome={setIncome}></IncomeList>
    </div>
  );
}

export default App;
