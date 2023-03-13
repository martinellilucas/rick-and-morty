const validation = (form, error, setError, target) => {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validPassword = /^(?=.*\d).{6,10}$/;

  if (target === "email") {
    if (!form.email) setError({ ...error, email: "Empty email is invalid" });
    else if (form.email.length > 35)
      setError({
        ...error,
        email: "Email cannot have more than 35 characters",
      });
    else if (!validEmail.test(form.email))
      setError({ ...error, email: "Invalid email" });
    else setError({ ...error, email: "" });
  }

  if (target === "password") {
    if (!validPassword.test(form.password))
      setError({
        ...error,
        password:
          "Password must be between 6 & 10 digits long and include at least one numeric digit.",
      });
    else setError({ ...error, password: "" });
  }
};

export default validation;
