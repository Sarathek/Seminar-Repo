import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Payment App</h1>
      <Button variant="success">Select</Button>
      <Button variant="danger" style={{border:"2px solid blue"}} size="sm" disabled>Submit</Button>
      <Button variant="dark" href="https://www.google.com/" size="lg" >Google</Button>
      <Button variant="link" href="https://www.facebook.com/">Facebook</Button>
    </div>
  );
}

export default App;
