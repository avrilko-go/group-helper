import './App.css'
import { App as AntdApp, ConfigProvider } from 'antd'
import AntdGlobal from './utils/AntdGlobal.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <ConfigProvider>
      <AntdApp>
        <AntdGlobal />
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
