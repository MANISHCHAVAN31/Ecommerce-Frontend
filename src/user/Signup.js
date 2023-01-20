import React, { useState } from "react";
import { toast } from "react-toastify";
import { signup } from "../auth/helper";
import Base from "../core/Base";
import customTheme from "../theme/root";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  // Advanced concept of functional programming
  // name -> name of a field
  // event -> e that input field has
  const handleChange = (name) => (event) => {
    setValues({ ...values, success: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false });

    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
          toast.error(data.error);
          return;
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });

          // toast on success
          toast.success("User registered successfully !");
          setTimeout(() => {
            navigate("/signin", { replace: true });
          }, 2000);
          return;
        }
      })
      .catch((error) => {
        console.log("Error in signup: ", error);
      });
  };

  const signUpForm = () => (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <form className="text-start" onSubmit={onSubmit}>
          <div className="form-group mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange("name")}
              value={name}
            />
          </div>
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
    <Base title="Sign up page" description="A page for user to sign up !">
      {signUpForm()}
    </Base>
  );
};

export default Signup;
