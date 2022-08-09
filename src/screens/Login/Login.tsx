import { Button, Navbar } from '../../components'

import { Header, LoginForm } from './components'
const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex">
        <Header />
        <LoginForm />
      </div>
    </div>
  )
}
export default Login
