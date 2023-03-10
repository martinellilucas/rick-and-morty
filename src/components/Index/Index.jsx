import style from "./Index.module.css";
import Form from "../Form/Form";
const Index = ({ login }) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}> WELCOME!</h1>
      <h4 className={style.subTitle}> Wubba lubba dub dub!</h4>
      <p className={style.frase}>
        {" "}
        To begin using the app, please login with your email and password. Then
        insert an ID into the search-bar and click 'Search'. Then go to the home
        page to see what you've got !
      </p>
      <p className={style.frase}>Thanks for stopping by !</p>
      <Form login={login} />
    </div>
  );
};

export default Index;
