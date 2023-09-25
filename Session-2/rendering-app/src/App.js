// List and Keys Example

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);


export default Garage;





















// Conditional Rendering Example

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';

// function MissedGoal() {
// 	return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
// 	return <h1>GOAL!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
// 	return (
// 		<>
// 			{ isGoal ? <MadeGoal/> : <MissedGoal/> }
// 		</>
// 	);
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={false} />);

// export default Goal;