import logo from './logo.svg';
import './App.css';
import { BasicText, Button } from '@monorepo/components';

function App() {
  return (
    <div className="App">
      <BasicText color="pink">this is the second app</BasicText>
      <Button onClick={()=>alert('testing 123')}>test</Button>
    </div>
  );
}

export default App;
