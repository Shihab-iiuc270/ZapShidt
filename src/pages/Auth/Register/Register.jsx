import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router';

const Register = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const {registerUser} = useAuth();
    const handleRegistration =(data) =>{
        console.log(data)
        registerUser(data.email,data.password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
         <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center font-bold">Create an Account</h3>
            <p className="text-center">Register with ZapShift</p>
            <form  onSubmit={handleSubmit(handleRegistration)} className='card-body'>
            <fieldset className="fieldset">
          <label className="label text-black">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
          {errors.email ?. type=='required' && <p className="text-red-500">Email is required</p>}
          <label className="label text-black">Password</label>
          <input type="password" {...register('password',{
            required:true,
            minLength:6,
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
          })} className="input" placeholder="Password" />
          {errors.password?.type =='required' && <p className='text-red-500'>Password is required</p>}
          {errors.password?.type =='minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>}
                {
                        errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
                    }         
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral bg-primary text-secondary mt-4">Register</button>
        </fieldset>
        <p>Already have an account? <Link to="/login" className='underline text-blue-600'>LogIn</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;