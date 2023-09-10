import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./layout/Navbar.js"
import CustomerHome from "./pages/CustomerHome";
import ProductHome from "./pages/ProductHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCustomer from "./customers/AddCustomer";
import ViewCustomer from './customers/ViewCustomer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Routes>
          <Route exact path="/" element={< ProductHome />} />
          <Route exact path="/customerhome" element={<CustomerHome />} />
          <Route exact path="/addcustomer" element={<AddCustomer />} />
          <Route exact path="/customer/:id" element={<ViewCustomer />} />
      </Routes>

      </Router>
    </div>
  );
}

export default App;
