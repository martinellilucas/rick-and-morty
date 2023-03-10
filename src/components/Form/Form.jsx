import { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";
const Form = ({ login }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const value = event.target.value;
    const target = event.target.name;
    console.log(form.password);
    setForm({ ...form, [target]: value });
    validation({ ...form, [target]: value }, error, setError);
  };
  const handleSubmit = () => {
    login(form);
  };
  return (
    <form className={style.container} onSubmit={() => handleSubmit()}>
      <div className={style.section}>
        <label className={style.label}>Email: </label>
        <input
          value={form.email}
          onChange={(e) => handleChange(e)}
          name="email"
          placeholder="Ingrese su email"
          className={error.email ? style.error : style.success}
        ></input>
      </div>
      {error.email ? (
        <span className={style.msgError}>{error.email}</span>
      ) : null}

      <div className={style.section}>
        <label className={style.label}>Password: </label>
        <input
          value={form.password}
          placeholder="Password"
          onChange={handleChange}
          name="password"
          className={error.password ? style.error : style.success}
        ></input>
      </div>
      {error.password ? (
        <span className={style.msgError}>{error.password}</span>
      ) : null}
      {!error.password && !error.email ? (
        <button className={style.button} type="submit">
          LOGIN
        </button>
      ) : null}
    </form>
  );
};

export default Form;
