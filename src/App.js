import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './App.css';
import NavBar from './components/NavBar';
import {Layout} from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import { useDispatch } from 'react-redux';
import { AuthActionCreator } from './store/reducers/auth/authActionCreator';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(AuthActionCreator.check())
  }, [])

  return (
    <BrowserRouter>
      <Layout className='layout'> 
        <NavBar className='navbar'/>
        <Content>
          <AppRouter className='layout'/>
        </Content> 
        <Footer>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;