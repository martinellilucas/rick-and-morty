const validation = (form, error, setError) => {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validPassword = /^(?=.*\d).{6,10}$/;
  if (form.email === "") {
    setError({ ...error, email: "Empty email is invalid" });
  } else {
    if (!validEmail.test(form.email)) {
      setError({ ...error, email: "Invalid email" });
    } else {
      setError({ ...error, email: "" });
    }
  }
  console.log(error.password);
  if (!validPassword.test(form.password)) {
    setError({
      ...error,
      password:
        "Password must be between 6 & 10 digits long and include at least one numeric digit.",
    });
  } else {
    setError({ ...error, password: "" });
  }
};

export default validation;
