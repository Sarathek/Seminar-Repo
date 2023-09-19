import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Row,Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Payment App</h1>
      <Button variant="success">Select</Button>
      <Button variant="danger" style={{border:"2px solid blue"}} size="sm" disabled>Submit</Button>
      <Button variant="dark" href="https://www.google.com/" size="lg" >Google</Button>
      <Button variant="link" href="https://www.facebook.com/">Facebook</Button>

      <div className='division'>
        <Row className='row'>
          <Col className='col1' lg={3}>UPI (Gpay/PayTm/PhonePe)</Col>
          <Col className='col2' lg={3}>Credit/Debit Card</Col>
          <Col className='col3' lg={3}>Net Banking</Col>
          <Col className='col4' lg={3}>Other Payments</Col>
        </Row>
      </div>

    </div>
  ); 
}

export default App;
