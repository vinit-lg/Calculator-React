
import styles from './App.module.css';
import ButtonsConatiner from './components/ButtonsContainer';
import Display from './components/Display';
import { useState } from 'react';

function App() {

const [calVal, setCalVal] = useState("");

const onButtonClick = (buttonText) =>{
if(buttonText === 'C'){

  setCalVal("");

}

else if(buttonText === '='){

  const result = eval(calVal);
  setCalVal(result);


} else{
  const newDisplayValue = calVal + buttonText;
  setCalVal(newDisplayValue);
}

}

  return (
  <div className={styles.calculator}>
 <Display displayValue={calVal}/>
 <ButtonsConatiner onButtonClick={ onButtonClick}/>
  </div>

  )
}

export default App;
