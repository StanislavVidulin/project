import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { InputContainer, LoginFormComponent, Title } from "./styles";
import { LoginFormValues } from "./types";
import { useContext } from "react";
import { UserContext } from "../../components/Layout/Layout";
import Spinner from "../../components/Spinner/Spinner";

function LoginForm() {

  const { isLoading, getUser } = useContext(UserContext);

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is required")
      .email("Field has type email (@ и т.д.)")
      .max(40, "Max 40 symbols")
      .min(12, "Min 12 symbols"),
    password: Yup.string()
      .typeError("Password must be a number")
      .required("Field password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Пароль должен содержать min 8 символов (заглавная буква, строчная, цифра, спецсимвол)"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as LoginFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: LoginFormValues) => {
      console.table(values);
    },
  });

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      {isLoading? <Spinner /> : <InputContainer>
      <Input
        name="email"
        label="Email *"
        id="email_id"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Input
        name="password"
        label="Password *"
        id="password_id"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      </InputContainer>}
      <Button name="LOGIN" onClick={getUser}/>
    </LoginFormComponent>
  );
}

export default LoginForm;
