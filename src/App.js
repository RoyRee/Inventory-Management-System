import './App.css';
import Homepage from './pages/homepage/homepage.component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import AddVendor from './pages/add-vendor/add-vendor.component';
import VendorList from './pages/vendor-list/vendor-list.component';
import AddBills from './pages/add-bills/add-bills.component';  

function App() {
  return (
    <div className="App">     
      <Switch>
      <Route exact  path='/' component={Homepage}/>
      <Route exact  path='/vendor' component={AddVendor}/>
      <Route exact  path='/vendorList' component={VendorList} />
      <Route exact  path='/bills' component={AddBills} />
      </Switch>
    </div>
  );
}

export default App;
