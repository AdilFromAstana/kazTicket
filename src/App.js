import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './App.css';
import NavBar from './components/NavBar';
import {Layout} from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout className='layout'>
        <NavBar className='navbar'/>
        <Content>
          <AppRouter/>
        </Content> 
        <Footer>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;