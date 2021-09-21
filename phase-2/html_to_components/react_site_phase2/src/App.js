import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Form from './components/Form';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className="App">

      <Header />
      <NavBar />
      <Form name="greg"/>
      <CardContainer />

  </div>
  );
}

export default App;
