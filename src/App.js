import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('')
  const [operation, setOperation] = useState('')
  const [showOperation, setShowOperation] = useState('')

  const handleAddNumber = (num) => {
    if (num === '.' && currentNumber.includes('.')) return;
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('')
    setOperation('')
    setShowOperation('')
  };

  const handleOperation = (op) => {
    if (currentNumber !== '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation(op)
      setShowOperation(`${currentNumber} ${op}`)
    }
  }
  
  const handleEquals = () => {
    if (firstNumber && operation && currentNumber) {
      let result
      switch (operation) {
        case '+':
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case '-':
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case '*':
          result = Number(firstNumber) * Number(currentNumber);
          break;
        case '/':
          result = Number(firstNumber) / Number(currentNumber);
          break;
        case '%':
          result = Number(firstNumber) % Number(currentNumber)
          break;
        default:
          return;
      }
      setCurrentNumber(String(result))
      setFirstNumber('')
      setOperation('')
      setShowOperation('')
    }
  }

  return (
    <Container>
      <Content>
        <Input value={showOperation ? `${showOperation} ${currentNumber}` : currentNumber} />
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="/" onClick={() => handleOperation('/')} />
          <Button label="%" onClick={ () => handleOperation('%') } />
          <Button label="x" onClick={() => handleOperation('x')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label="0" percentual={3} onClick={() => handleAddNumber('0')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  )
}

export default App
