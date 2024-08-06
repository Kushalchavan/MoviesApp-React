import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../constants/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setError, setLoading, setUser } from "../redux/authSlice";

const inputCss =
  "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";

const labelCss =
  "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1";

const Signup = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    let formIsValid = true;
    let newErrors = { name: "", email: "", password: "" };

    //validation
    if (!nameValue) {
      formIsValid = false;
      newErrors.name = "Name is required";
    }

    if (!emailValue) {
      formIsValid = false;
      newErrors.email = "Email is required";
    }

    if (!passwordValue) {
      formIsValid = false;
      newErrors.password = "Password is required";
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );
      const user = userCredential.user;
      dispatch(setUser(user));
      navigate("/");
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="w-screen h-screen pb-20 bg-purple text-white flex flex-col justify-center items-center max-sm:w-full max-sm:h-full">
      <div className="w-[30%] text-center px-3 py-1 max-sm:w-[80%]">
        <div className="mt-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 m-auto px-2 py-2 border border-white rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <h1 className="font-extrabold text-4xl mt-2 mb-8 max-sm:text-xl">
          Let&apos;s get you set up!
        </h1>
        <form className="flex flex-col gap-2 mt-4" >
          <div className="relative border border-white rounded-lg px-3 py-1">
            <input
              type="text"
              ref={name}
              id="floating_outlined"
              className={inputCss}
              placeholder=" "
            />
            <label htmlFor="floating_outlined" className={labelCss}>
              First Name
            </label>
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs ">{errors.name}</p>
          )}
          <div className="relative border border-white rounded-lg px-3 py-1">
            <input
              type="email"
              ref={email}
              id="floating_outlined"
              className={inputCss}
              placeholder=" "
            />
            <label htmlFor="floating_outlined" className={labelCss}>
              Email
            </label>
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
          <div className="relative border border-white rounded-lg px-3 py-1">
            <input
              type="password"
              ref={password}
              id="floating_outlined"
              className={inputCss}
              placeholder=" "
            />
            <label htmlFor="floating_outlined" className={labelCss}>
              Password
            </label>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs ">{errors.password}</p>
          )}

          <button type="submit" className="bg-slate-400 px-4 py-4 rounded-xl" onClick={handleSignUp}>
            Register
          </button>
        </form>

        <p className="text-xs mt-4 opacity-65">
          By continuing or registering, you agree that you have read and
          understood Privacy Policy and agree to Terms of Use.
        </p>

        <div className="opacity-65 text-xs flex gap-1 justify-center mt-5">
          <p>Already have an account? </p>{" "}
          <Link to="/signin" className="text-white font-extrabold underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
