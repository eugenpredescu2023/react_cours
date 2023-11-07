import './App.css';
import { Calculator } from './components/Calculator';
import { AboutState } from './components/AboutState';
import { ColorStyle } from './components/ColorStyle';
import { AboutState2 } from './components/AboutState2';
import { ShowHide } from './components/ShowHide';
import { Home } from './Home';


function App() {
  return (
    <div className="App">
      <Calculator/>
      <br/>
      <AboutState/>
      <br/>
      <ColorStyle/>
      <br/>
      <AboutState2/>
      <br/>
      <ShowHide/>
      <br/>
      <Home/>
    </div>
  );
}

export default App;
