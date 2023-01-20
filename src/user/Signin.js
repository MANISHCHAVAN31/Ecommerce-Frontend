import React, { useState } from "react";
import Base from "../core/Base";
import { redirect } from "react-router-dom";
import customTheme from "../theme/root";
import { authenticate, isAuthenticated, signin } from "../auth/helper";
import { toast } from "react-toastify";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const user = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, success: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false, loading: true });

    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
          toast.error(data.error);
          return;
        } else {
          console.log("data: ", data);
          authenticate(data, () => {
            setValues({ ...values, didRedirect: true });
          });
        }
      })
      .catch((error) => {
        console.log("Error in signin: ", error);
        toast.error("Sign in request failed");
      });
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <p>Redirect to admin dashboard</p>;
      } else {
        return <p>Redirect to user dashboard</p>;
      }
    }

    if (isAuthenticated()) {
      return redirect("/");
    }
  };

  const performLoading = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const signInForm = () => (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <form className="text-start" onSubmit={onSubmit}>
          <div className="form-group mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              onChange={handleChange("email")}
              value={email}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={handleChange("password")}
              value={password}
            />
          </div>
          <div className="form-group d-grid mb-3">
            <button
              type="submit"
              className="btn border-3 rounded"
              style={{ backgroundColor: customTheme.Green }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <Base title="Sign in page" description="A page for user to sign in !">
      {performLoading()}
      {signInForm()}
      {performRedirect()}
    </Base>
  );
};

export default Signin;
