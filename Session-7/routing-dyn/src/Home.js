import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <button>
        <Link to="/product/1">Product 1</Link>
      </button>
      <button>
        <Link to="/product/2">Product 2</Link>
      </button>
      <button>
        <Link to="/product/3">Product 3</Link>
      </button>
    </div>
  );
}

export default Home;

