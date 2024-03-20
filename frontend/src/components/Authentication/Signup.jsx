// import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import classes from './authentication.module.css';
import { useMutation } from '@apollo/client';
import { signup } from '../../queries';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [register] = useMutation(signup);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      await register({
        variables: {
          userNew: {
            email: data.email,
            master_password: data.password,
            name: data.name,
          },
        },
      });
      reset({
        password: '',
      });
      toast.success('Signed up successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } catch (error) {
      reset({
        password: '',
      });
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  }

  function loginHandler(e) {
    e.preventDefault();
    navigate('/login');
  }

  return (
    <>
      <ToastContainer />
      <form className={classes.signUpform} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors.name && (
            <p className={classes.error}>{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors.email && (
            <p className={classes.error}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Master Password</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: 'Password is required' }}
            render={({ field }) => <input type="password" {...field} />}
          />
          {errors.password && (
            <p className={classes.error}>{errors.password.message}</p>
          )}
        </div>

        <div className={classes.btns}> 
          <button type="submit" className={classes.tpButton}>
            SignUp
          </button>
          <p>
            Already have an account !
            <button className={classes.btn} onClick={loginHandler}>
              Log in
            </button>
          </p>
        </div>
      </form>
    </>
  );
}

export default Signup;
