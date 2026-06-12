import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
// import { useRef } from "react";
import { toast } from "react-toastify";
const Login = () => {
    const {register,handleSubmit,getValues,formState:{errors}} = useForm()
    const {signInUser,forgetPassword} = useAuth()
    // const emailRef = useRef()
    const location = useLocation()
    console.log('from login',location)
    const navigate = useNavigate()
   const handleForgotPassword = () => {
    const email = getValues("email")
    // console.log(emailRef)
     if (!email) {
    toast.error("Please enter your email first");
    return;
  }

    forgetPassword(email)
    .then(() => {
      toast.success("Password reset email sent. Check your inbox.");
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
    toast.error("No account found with this email.");
  } else {
    toast.error(error.message);
  }
    });
};
    const handleLogin =(data) =>{
         console.log(data)
         signInUser(data.email,data.password)
         .then(()=>{
            // console.log(result.user)
            navigate(location.state || '/')
         }).catch(error=>{
            console.log(error.message)
         })
    }
    return (
         <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center font-bold">Welcome back</h3>
            <p className="text-center">Login with ZapShift</p>
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
          <label className="label text-black">Email</label>
          <input type="email"  {...register('email',{required:true})} className="input" placeholder="Email" />
  {errors.email?.type=='required' && <p className="text-red-500">Email is required to login</p>}

          {/* {password} */}
          <label className="label text-black">Password</label>
          <input type="password" {...register('password',{required:true})} className="input" placeholder="Password" />
            {errors.password?.type=='required' && <p className="text-red-500">Password is required to login</p>}

          <div><button type="button"  onClick={handleForgotPassword} className="link link-hover">Forgot password?</button>
</div>
          <button className="btn btn-neutral bg-primary text-secondary mt-4">Login</button>
        </fieldset>
        <p>Don't have any account? <Link to='/register' state={location.state} className="underline text-blue-600">Register</Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
    );
};

export default Login;