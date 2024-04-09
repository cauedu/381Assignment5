import React, { useState } from 'react';
import Header from './Header';
import SignupForm from './SignupForm'
import Footer from './Footer';

const SignUpPage = () => {
    const [isLoginForm, setIsLoginForm] = useState(false)

    const switchForm = () => {
        setIsLoginForm(prevState => !prevState)
    };

    return (
        <div>
            <Header />
            {<SignupForm switchForm={switchForm} />}
            <Footer />
        </div>
    );
};

export default SignUpPage;