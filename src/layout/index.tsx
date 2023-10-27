import { Outlet } from 'react-router-dom'

const MyLayout = () => {
  return (
    <div>
      布局
      <Outlet />
    </div>
  )
}

export default MyLayout
