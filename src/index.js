import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import './i18n';
import { ConfigProvider } from 'antd';
import ru from 'antd/lib/locale/ru_RU';

ReactDOM.render(
    <ConfigProvider locale={ru}>
        <Suspense fallback='isLoading...'>
            <Provider store={store}>
                <App />
            </Provider>
        </Suspense>
    </ConfigProvider>,
    document.getElementById('root') 
);