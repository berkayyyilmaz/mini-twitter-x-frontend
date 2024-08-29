import icon from '../assets/twitter-logo.png'
import LoginForm from '../layouts/LoginForm'

export const Login = () => {
  return (
    <div className="w-[350px] mx-auto mt-[5%] p-5 flex flex-col items-start">
      <img src={icon} alt="Twitter Logo" className="max-w-[13%] h-auto mb-4" />
      <h1 className="font-semibold mb-4 text-3xl">Log in to Twitter</h1>
      <LoginForm></LoginForm>
      <div className="w-full flex justify-between text-sm">
        <a href="#forgot-password" className="text-twitter-blue">
          Forgot password?
        </a>
        <a href="#sign-up" className="text-twitter-blue">
          Sign up to Twitter
        </a>
      </div>
    </div>
  )
}