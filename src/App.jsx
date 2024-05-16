import { useState } from 'react'
import Dashboard from './components/Dashboard.jsx';
import OutlinedCard from './components/Cards.jsx';
import BigOutlinedCard from './components/BigCard.jsx';
import ScrollMenu from './components/Scroll.jsx';
import ButtonAppBar from './components/Navbar.jsx';
import { mockTransactions } from './components/mockData.js';
import AnchorTemporaryDrawer from './components/Sidebar.jsx';

function App() {
  return (
    <div className ={"wrapper"} >
      <ButtonAppBar></ButtonAppBar>
      <BigOutlinedCard></BigOutlinedCard>
      <Dashboard></Dashboard>
      <OutlinedCard></OutlinedCard>
      <ScrollMenu mockTransactions={mockTransactions}></ScrollMenu>
      
    </div>
  )
}

export default App;
