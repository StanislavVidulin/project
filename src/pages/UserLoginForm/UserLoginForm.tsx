import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginFormWrapper, Title } from "./styles";

function UserLoginForm () {
    return (
        <LoginFormWrapper>
            <Title>Login Form</Title>
            <LoginForm/>
        </LoginFormWrapper>
    )
}

export default UserLoginForm;