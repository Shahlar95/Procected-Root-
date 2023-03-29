import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Formik, Form, Field } from "formik";
import { formVal } from "../../Validation/validation";
import cn from "classnames"

const Login = () => {
  // const [user, setUser] = useState("");
  // const [pasw, setPasw] = useState("");
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   if (
  //     (user === "shahlar" && pasw === "1") ||
  //     (user === "admin" && pasw === "2") ||
  //     (user === "superadmin" && pasw === "3")
  //   ) {
  //     navigate("/home");
  //     localStorage.setItem(
  //       "localUser",
  //       JSON.stringify({ userName: user, userPasw: pasw })
  //     );
  //   } else {
  //     alert("Wrong password");
  //     navigate("/login");
  //   }
  // };

  return (
    <div className="login-div">
      <h1>Login</h1>
      <Formik
        validationSchema={formVal}
        initialValues={{ name: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({errors,touched}) => (
          <Form className="form">
            {errors.name && touched.name ? <div className="err">{errors.name}</div> : null}
            <Field name="name" className={`login-name ${cn({'danger':errors.name && touched.name})}`}type="text" />
            {errors.password && touched.password ? <div className="err">{errors.password}</div> : null}
            <Field name="password" className={`login-psw ${cn({'danger':errors.name && touched.name})}`} type="text" />
            <button type="submit" className="btn">Login </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
