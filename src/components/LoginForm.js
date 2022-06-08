import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthActionCreator } from '../store/reducers/auth/authActionCreator';
import { SHOP_ROUTE } from '../utils/consts';

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {t} = useTranslation();
    const {error, isLoading} = useSelector(state=>state.auth)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const submit = () => {
        dispatch(AuthActionCreator.login(username, password));
        navigate(SHOP_ROUTE)
    }
 
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={submit}
        >
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

            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>{t('auth.rememberMe')}</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="">
                    {t('auth.forgotPassword')}
                </a>
            </Form.Item>
    
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    {t('auth.log in')}
                </Button>
                <a href="">{t('auth.registration')}</a>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;