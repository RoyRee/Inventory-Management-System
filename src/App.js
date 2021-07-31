import './App.css';
import Homepage from './pages/homepage/homepage.component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import BeneficiaryForm from './pages/beneficiary/beneficiary.component';

function App() {
  return (
    <div className="App">
      
      <Switch>
      <Route exact  path='/' component={Homepage}/>
      <Route exact  path='/vendor' component={BeneficiaryForm}/>
      </Switch>
    </div>
  );
}

export default App;
