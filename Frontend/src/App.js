import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Pages/Layout/layout';
import Admin from './Pages/Admin/admin';
import Analytics from './Pages/Analytics/analytics';
import UserManagement from './Pages/UserManagement/userManagement';
import BudgetManagement from './Pages/BudgetManagement/budgetManagement';
import ComplianceManagement from './Pages/ComplianceManagement/complianceManagement';
import CustomerSupport from './Pages/CustomerSupport/customerSupport';
import CommandChat from './Pages/CommandChat/commandChat';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/user-management' element={<UserManagement />} />
        <Route path='/budget-management' element={<BudgetManagement />} />
        <Route path='/compliance-management' element={<ComplianceManagement />}/>
        <Route path='/command-chat' element={<CommandChat />}/>
        <Route path='/customer-support' element={<CustomerSupport />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
