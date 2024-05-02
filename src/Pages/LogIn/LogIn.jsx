import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Result } from "postcss";

const LogIn = () => {

  const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => console.log(error));
    }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img src={loginImg}alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold">Login </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login" className="btn text-white bg-primary hover:border-primary" />
              </div>
            </form>
            <div className="text-center my-4">
            <p>Create a new account <Link className="text-primary font-bold" to='/SignUp'>Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
