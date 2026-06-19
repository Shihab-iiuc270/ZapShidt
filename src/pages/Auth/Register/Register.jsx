import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Register = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const {registerUser,updateUserProfile} = useAuth();
    const location = useLocation()
    console.log('regis',location)
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const handleRegistration =(data) =>{
        // console.log(data)
        
        const profileImg = data.photo[0];
        registerUser(data.email,data.password)
        .then(() => {
            // console.log(result.user);

             const formData = new FormData();
                formData.append('image', profileImg);

                // 2. send the photo to store and get the ul
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

                axios.post(image_API_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;

                        // create user in the database
                        const userInfo = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoURL
                        }

                           axiosSecure.post('/users',userInfo)
                           .then(res=>{
                            if(res.data.insertedId){
                                console.log('user created in the db')
                            }
                           })

                        // update user profile to firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoURL
                        }

                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log('user profile updated done.')
                                navigate(location.state || '/');
                            })
                            .catch(error => console.log(error))
                    })



            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
         <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center font-bold">Create an Account</h3>
            <p className="text-center">Register with ZapShift</p>
            <form  onSubmit={handleSubmit(handleRegistration)} className='card-body'>
            <fieldset className="fieldset">
                {/* name */}
          <label className="label text-black">Name</label>
          <input type="text" {...register('name',{required:true})} className="input" placeholder="Name" />
          {errors.name ?. type=='required' && <p className="text-red-500">Name is required</p>}

          {/* photo */}
          <label className="label text-black">Photo</label>
          <input type="file" {...register('photo',{required:true})} className="file-input file-input-secondary " placeholder="Photo" />
          {errors.photo ?. type=='required' && <p className="text-red-500">Photo is required</p>}

          {/* email */}
          <label className="label text-black">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
          {errors.email ?. type=='required' && <p className="text-red-500">Email is required</p>}


          {/* //password */}
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
        <p>Already have an account? <Link to="/login" state={location.state} className='underline text-blue-600'>LogIn</Link></p>
            </form>
            <SocialLogin ></SocialLogin>
        </div>
    );
};

export default Register;