import { useNavigate } from 'react-router-dom';
import classes from './authentication.module.css';
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
function Login() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    toast.success('Message', {
      position: 'bottom-center',
    });
  }

  function signUpHandler(e) {
    e.preventDefault();
    navigate('/sign-up');
  }

  function forgetPasswordHandler() {
    navigate('/forget-password');
  }

  return (
    <>
      <ToastContainer />
      <form className={classes.loginform} onSubmit={handleSubmit(onSubmit)}>
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

        <label htmlFor="password">Master Password</label>
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Password is required' }}
          render={({ field }) => <input type="password" {...field} />}
        />
        {errors.password && (
          <p className={classes.error}>{errors.password.message}</p>
        )}

        <button className={classes.tpButton} type="submit">
          Login
        </button>
        <p>
          Already registered !
          <button className={classes.btn} onClick={signUpHandler}>
            Sign Up
          </button>
        </p>
        <p className={classes.forget} onClick={forgetPasswordHandler}>
          Forgot password
        </p>
      </form>
    </>
  );
}

export default Login;
