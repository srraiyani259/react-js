import React, { useState } from 'react'; 

const Counter = () => { 
    const [value1, setValue1] = useState(''); 
    const [value2, setValue2] = useState(''); 
    const [operator, setOperator] = useState('+'); 
    const [result, setResult] = useState(0); 
    const i1 = (event) => { setValue1(event.target.value); }; 
    const i2 = (event) => { setValue2(event.target.value); }; 
    const final = (event) => { setOperator(event.target.value); }; 
    const Result = () => { const num1 = parseInt(value1); 
        const num2 = parseInt(value2); 
        let Result; 
        switch (operator) 
        {   case '+': Result = num1 + num2;
            break; 
            case '-': Result = num1 - num2; 
            break; 
            case '*': Result = num1 * num2; 
            break; 
            case '/': Result = num1 / num2; 
            break; 
            default: Result = 0; 
        }     
        setResult(Result); };
         return (
         <div>       
            <div className='calculator'>         
                <input type="tex    t" value={value1} onChange={i1} />   
                <select value={operator} onChange={final}>           
                    <option value="+">+</option>           
                    <option value="-">-</option>           
                    <option value="*">*</option>           
                    <option value="/">/</option>                    
                </select>         
                <input type="text" value={value2} onChange={i2} />         
                <button onClick={Result}>=</button>         
                <span>{result}</span>       
                </div>     
                </div>); 
}; 
export default Counter;