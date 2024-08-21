import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import MiniDrawer from './components/Sidebar';
import Box from '@mui/material/Box';
import DC from './components/DC';
import VM from './components/VM';
// Importez d'autres composants si nécessaire

function App() {
  return (
  <Router>
      <Box sx={{ display: 'flex' }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:'65px'}}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/dc" element={<DC/>} />
            <Route path="/vm" element={<VM/>} /> 
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
