export default function validateInfo(values) {
  let errors = {};
  if (!values.username.trim()) {
    errors.username = "Username  required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password should be greater than 6 characters";
  }

  if (!values.password2) {
    errors.password2 = "Please confirm password";
  } else if (values.password !== values.password2) {
    errors.password2 = "Password does not match";
  }

  return errors;
}
