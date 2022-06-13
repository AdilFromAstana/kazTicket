import { Button, Tabs } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AuthActionCreator } from '../store/reducers/auth/authActionCreator';

const Profile = () => {

    const { TabPane } = Tabs;

    const dispatch = useDispatch();

    return (
        <div>
            <Tabs 
                tabBarStyle={{padding: '0px auto', margin: '0px auto', display: 'flex', justifyContent: 'space-between'}}
                defaultActiveKey="1" 
                type="card" 
                size='large' 
                className='h100'
            >
                <TabPane tab="Ваш профиль" key="1">
                    <Button type="primary" size='large' onClick={()=>dispatch(AuthActionCreator.logout())}>
                        Выйти
                    </Button>
                </TabPane>
                <TabPane tab="Билеты" key="2">
                    Content of card tab 2
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Profile;