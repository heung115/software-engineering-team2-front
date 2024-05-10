// SignupForm.js
import React, { useState } from 'react';
import '../styles/SignupForm.css';
import useSignup from '../hooks/useSignup';


const SignUpModal = ({closeMe}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const { signup, validateForm, isLoading, isSuccess } = useSignup();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (validateForm(email, password, confirmPassword, setErrors)) {
            signup(email, password, closeMe);
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {isSuccess && <p>Signup successful!</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errors.password && (
                        <p className="error">{errors.password}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={isLoading || isSuccess ? 'button-disabled' : ''}
                >
                    Sign Up
                </button>
                {isLoading && (
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
                )}
            </form>
        </div>
    );
}

// function SignupForm({ closeModal }) {
    



    // return (
    //     <div className="signup-container">
    //         <h2>Sign Up</h2>
    //         {isSuccess && <p>Signup successful!</p>}
    //         <form onSubmit={handleSubmit}>
    //             <div className="form-group">
    //                 <label htmlFor="email">Email:</label>
    //                 <input
    //                     type="email"
    //                     id="email"
    //                     value={email}
    //                     onChange={(e) => setEmail(e.target.value)}
    //                     required
    //                 />
    //                 {errors.email && <p className="error">{errors.email}</p>}
    //             </div>
    //             <div className="form-group">
    //                 <label htmlFor="password">Password:</label>
    //                 <input
    //                     type="password"
    //                     id="password"
    //                     value={password}
    //                     onChange={(e) => setPassword(e.target.value)}
    //                     required
    //                 />
    //                 {errors.password && (
    //                     <p className="error">{errors.password}</p>
    //                 )}
    //             </div>
    //             <div className="form-group">
    //                 <label htmlFor="confirm-password">Confirm Password:</label>
    //                 <input
    //                     type="password"
    //                     id="confirm-password"
    //                     value={confirmPassword}
    //                     onChange={(e) => setConfirmPassword(e.target.value)}
    //                     required
    //                 />
    //                 {errors.confirmPassword && (
    //                     <p className="error">{errors.confirmPassword}</p>
    //                 )}
    //             </div>
    //             <button
    //                 type="submit"
    //                 disabled={isLoading}
    //                 className={isLoading || isSuccess ? 'button-disabled' : ''}
    //             >
    //                 Sign Up
    //             </button>
    //             {isLoading && (
    //                 <div className="loader-container">
    //                     <div className="loader"></div>
    //                 </div>
    //             )}
    //         </form>
    //     </div>
    // );
// }

export { SignUpModal }
