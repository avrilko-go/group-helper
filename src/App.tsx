import './App.css'
import { App as AntdApp, ConfigProvider } from 'antd'
import AntdGlobal from './utils/AntdGlobal.tsx'
import { Button } from 'antd'
import { message } from './utils/AntdGlobal.tsx'

function App() {
  const clickMessage = () => {
    message.error('消息错误')
  }

  return (
    <ConfigProvider>
      <AntdApp>
        <AntdGlobal />
        <Button type={'primary'} onClick={clickMessage}>
          点击
        </Button>
        <div className={'flex justify-center items-center'}>
          <div>类型1</div>
          <div>类型2</div>
        </div>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
