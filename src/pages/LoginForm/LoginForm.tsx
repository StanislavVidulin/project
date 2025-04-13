import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  ErrorContainer,
  InputContainer,
  LoginFormComponent,
  Title,
} from "./styles";
import { LoginFormValues } from "./types";
import { UserContext } from "../../components/Layout/Layout";
import Spinner from "../../components/Spinner/Spinner";

function LoginForm() {
  const { isLoading, getUser, error } = useContext(UserContext);

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is required")
      .email("Field has type email (@ etc.)")
      .max(40, "Max 40 symbols")
      .min(12, "Min 12 symbols"),
    password: Yup.string()
      .required("Field password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character."
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as LoginFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: getUser,
  });

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <InputContainer>
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
        </InputContainer>
      )}
      {/* <Button name="LOGIN" disabled={(formik.isValid && formik.dirty)}/> */}
      <Button name="LOGIN" />
      <ErrorContainer>{error}</ErrorContainer>
    </LoginFormComponent>
  );
}

export default LoginForm;
