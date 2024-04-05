import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Footer from './Footer';

const LoginPage = () => {
    const [isLoginForm, setIsLoginForm] = useState(true)

    const switchForm = () => {
        setIsLoginForm(prevState => !prevState)
    };

    return (
        <div>
            <Header />
            {isLoginForm ? <LoginForm switchForm={switchForm} /> : <SignupForm switchForm={switchForm} />}
            <Footer />
        </div>
    );
};

export default LoginPage;