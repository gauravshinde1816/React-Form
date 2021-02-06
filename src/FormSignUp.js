import React from "react";
import "./Form.css";
import validate from "./validateInfo";
import useForm from "./useForm";
const FormSignUp = () => {
  const { handleChange, values, handleSubmit, error } = useForm(validate);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Register form</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your name"
            value={values.username}
            onChange={handleChange}
          />
          {error.username && <p>{error.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter the password"
            value={values.password}
            onChange={handleChange}
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Enter the password"
            value={values.password2}
            onChange={handleChange}
          />
          {error.password2 && <p>{error.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Submit
        </button>
        <span className="form-input-login">
          {" "}
          Already have as account ? Login <a href="">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignUp;
