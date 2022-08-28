import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";
const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit, } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(gUser || user);
  const navigate = useNavigate();
  let signUpError;

  if (gLoading || loading || updating) {
    return <Loading></Loading>
  }
  if (gError || error || updateError) {
    signUpError = <p className='text-error text-sm font-bold'>{gError?.message || error?.message || updateError?.message}</p>
  }
  if (token) {
    navigate('/appointment')
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-primary">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Enter your name
                </span>
              </label>
              <input
                type="name"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-lg font-bold text-error">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Enter your email
                </span>
              </label>
              <input
                type="email"
                // name="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                    message: "Provide a valide email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-lg font-bold text-error">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-lg font-bold text-error">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Enter your password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 character or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-lg font-bold text-error">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-lg font-bold text-error">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs mt-5">
              {signUpError}
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-neutral w-full max-w-xs text-white capitalize text-lg font-bold "
              />
            </div>
          </form>
          <div>
            <p className="text-white text-lg">Already have a account? <Link className="text-blue-700 text-lg" to='/login'>Login</Link></p>
          </div>
          <div>
            <div className="divider text-white">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn  btn-error w-full max-w-xs text-white  text-sm font-bold "
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
