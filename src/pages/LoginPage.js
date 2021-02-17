import LoginForm from '../components/LoginForm';
import HeaderLayout from '../layouts/HeaderLayout';

const LoginPage = () => {
    return (
        <HeaderLayout>
            <LoginForm />
            <footer>Powered By Accounting Software</footer>
        </HeaderLayout>
    );
}

export default LoginPage;
