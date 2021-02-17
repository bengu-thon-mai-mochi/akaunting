import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import InstallPage from './pages/InstallPage';
import LoginPage from './pages/LoginPage';
import WizardPage from './pages/WizardPage';
import AdminContext from './adminContext';
import BackgroundLayout from './layouts/BackgroundLayout';

function App() {
  const [adminInfo, setAdminInfo] = useState({});

  return (
    <AdminContext.Provider value={{ adminInfo, setAdminInfo }} >
      <Switch>
        <BackgroundLayout>
          <Route exact path="/" component={InstallPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/wizard" component={WizardPage} />
        </BackgroundLayout>
      </Switch>
    </AdminContext.Provider>
  );
}

export default App;
