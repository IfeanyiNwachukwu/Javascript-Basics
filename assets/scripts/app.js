const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInputAsNumber(){
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
     const logEntry =  { 
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
       }
       logEntries.push(logEntry);
       console.log(logEntries);
}

function add(){
    const enteredNumber = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD',initialResult,enteredNumber,currentResult);
  }
function subtract(){
    const enteredNumber = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
      writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);
    
}
function multiply(){
    const enteredNumber = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult *=  enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
      writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
    
}
function divide(){
    const enteredNumber = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult /=  enteredNumber;
    createAndWriteOutput('DIVIDE', initialResult, enteredNumber);
    
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);