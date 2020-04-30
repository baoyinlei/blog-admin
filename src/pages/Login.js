import React,{ useState } from 'react'
import 'antd/dist/antd.css'
import {Input, Button , Spin, Card} from 'antd'

import {UserOutlined,EyeOutlined} from '@ant-design/icons'

import '../static/css/Login.css';

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoding] = useState(false)

    const checkLogin = () => {
        setIsLoding(true);
        setTimeout(()=>{
            setIsLoding(false)
        },1000)
    }


    return (
        <div className='login-div'>
            <Spin tip="登录中..."  spinning={isLoading}>
                <Card title="后台管理系统" bordered={true} style={{ width: 400 }} headStyle={{textAlign:"center"}}>
                    <Input id='username' size='middle' placeholder="请输入用户名" prefix={ <UserOutlined style={{color:'rgba(0,0,0,.25)',marginRight:'8px'}} /> } />
                    <br/><br/>
                    <Input.Password id='password' placeholder="请输入密码" prefix={ <EyeOutlined  style={{color:'rgba(0,0,0,.25)',marginRight:'8px'}} />} />
                    <br/><br/>
                    <Button type="primary" size='large' block onClick={checkLogin} >登录</Button>
                </Card>
            </Spin>
        </div>
    )

}

export default Login