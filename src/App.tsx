import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header-component/header.component';
import ContentComponent from './components/content-component/content.component';

/* App is a component - In React (when using Function components)
  A component is a function that returns a view - or otherwise called
  a template.
*/
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ContentComponent />
    </div>
  );
}

export default App;
