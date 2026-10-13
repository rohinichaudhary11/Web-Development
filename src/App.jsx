import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginPage } from './components/LoginPage';
import { DashboardPage } from './components/DashboardPage';

/**
 * MainContent consumes AuthContext directly without props!
 */
function MainContent() {
  const { isLoggedIn } = useAuth(); // Access auth state via Context - NO PROPS!
  return isLoggedIn ? <DashboardPage /> : <LoginPage />;
}

export default function App() {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
}
