import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthActionCreator } from '../store/reducers/auth/authActionCreator';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {t} = useTranslation();
    const {error, isLoading} = useSelector(state=>state.auth)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { Text, Link } = Typography;

    const isLogin = location.pathname === LOGIN_ROUTE; 

    const submit = () => {
        dispatch(AuthActionCreator.login(username, password));
        navigate(SHOP_ROUTE)
    }
 
    return (
        <>
            <h1 style={{display:'flex', justifyContent: 'center'}}>{isLogin ? 'Войти в аккаунт' : 'Регистрация'}</h1>
            {isLogin
            ?
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={submit}
            >
            {/*LOGIN - INPUT FOR USERNAME*/}
                <Form.Item
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: t('auth.emptyUsernameError'),
                        },
                    ]}
                >
                    <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder={t('auth.username')} 
                        value={username} 
                        onChange={e=>setUsername(e.target.value)}
                    />
                </Form.Item>

                {/*LOGIN - INPUT FOR PASSWORD*/}
                <Form.Item
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: t('auth.emptyPasswordError'),
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder={t('auth.password')}
                        value={password} 
                        onChange={e=>setPassword(e.target.value)}
                    />
                </Form.Item>

                {/*LOGIN - CHECKBOX ЗАПОМНИТЬ АККАУНТ*/}
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>{t('auth.rememberMe')}</Checkbox>
                    </Form.Item>
                    {isLogin
                    ?
                        <a className="login-form-forgot" href="">
                            {t('auth.forgotPassword')}
                        </a>
                    :
                        ''
                    }
                </Form.Item>
        
                {/*LOGIN - BUTTON*/}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {isLogin ? t('auth.log in') : t('auth.sign up')}
                    </Button>
                    <Link 
                        onClick={()=>navigate(isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE)}
                    >
                        {isLogin ? t('auth.registration') : t('auth.login')}
                    </Link>
                </Form.Item>
            </Form>
            :
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={submit}
            >
            {/*LOGIN - INPUT FOR USERNAME*/}
                <Form.Item
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: t('auth.emptyUsernameError'),
                        },
                    ]}
                >
                    <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder={t('auth.username')} 
                        value={username} 
                        onChange={e=>setUsername(e.target.value)}
                    />
                </Form.Item>

                {/*LOGIN - INPUT FOR PASSWORD*/}
                <Form.Item
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: t('auth.emptyPasswordError'),
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder={t('auth.password')}
                        value={password} 
                        onChange={e=>setPassword(e.target.value)}
                    />
                </Form.Item>

                {/*LOGIN - CHECKBOX ЗАПОМНИТЬ АККАУНТ*/}
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>{t('auth.rememberMe')}</Checkbox>
                    </Form.Item>
                    {isLogin
                    ?
                        <a className="login-form-forgot">
                            {t('auth.forgotPassword')}
                        </a>
                    :
                        ''
                    }
                </Form.Item>
        
                {/*LOGIN - BUTTON*/}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {isLogin ? t('auth.log in') : t('auth.sign up')}
                    </Button>
                    <Link 
                        onClick={()=>navigate(isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE)}
                    >
                        {isLogin ? t('auth.registration') : t('auth.login')}
                    </Link>
                </Form.Item>
            </Form>
            }
        </>
    );
};

export default LoginForm;