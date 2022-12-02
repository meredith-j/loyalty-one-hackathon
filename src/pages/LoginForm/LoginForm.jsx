// import './LoginForm/scss';
import { Link } from 'react-router-dom';
import progressBar from '../../assets/images/progress-bar-register.svg';
import apple from '../../assets/icons/apple.svg';
import google from '../../assets/icons/google.svg';
import facebook from '../../assets/icons/facebook.svg';
import './LoginForm.scss';

export default function LoginForm() {
    return (
        <>
            <div className="register__progress">
                <img src={progressBar} />
            </div>
            <h1 className='register__header'>Create an Account</h1>
            <form className='form'>
                    <label className='form__label'> Email </label>
                        <input type='text' className='form__input-text' placeholder="Enter email here"/>
                    <label className='form__label'> Password </label>
                        <input type='text' className='form__input-text' placeholder="Enter password here"/>
                    <label className='form__label'> Confirm Password </label>
                        <input type='text' className='form__input-text form__input-text--last' placeholder="Enter password here"/>
                    <Link to="/register/details" className='form__submit'>
                        Sign Up
                    </Link>
            </form>
                <div className='create__options'>
                    <p className='create__disclaimer'>By continuing to create an account, you agree to Air Miles Terms & Conditions and Privacy Policy</p>
                    <p className='create__choice'>or</p>
                    <div className='create__platforms'>
                        <img src={apple} alt='Apple icon' className='create__icon create__icon--apple' />
                        <img src={google} alt="Google icon" className='create__icon create__icon--google' />
                        <img src={facebook} alt='Facebook icon' className=' create__icon--facebook' />
                    </div>
                </div>
        </>
    )
}