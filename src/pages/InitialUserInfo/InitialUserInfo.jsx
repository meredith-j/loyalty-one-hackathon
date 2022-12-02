import { Link } from "react-router-dom"
import progressBar from '../../assets/images/progress-bar-info.svg';
import question from '../../assets/icons/question.png';
import '../../App.scss'

export default function InitialUserInfo() {
    return(
        <>
        <div className="register__progress">
            <img src={progressBar} />
        </div>

        <h1 className='register__header'>Tell us about yourself</h1>
            <form className='form'>
                <label className='form__label'> First Name* </label>
                     <input type='text' className='form__input-text' placeholder="Enter first name here"/>
                <label className='form__label'> Last Name*</label>
                    <input type='text' className='form__input-text' placeholder="Enter last name here"/>
                <label className='form__label'> Pronouns</label>
                    <div className="form__input-values">
                        <input type='button' name='pronouns' className='form__input-value' value="He/Him"/>
                        <input type='button' name='pronouns' className='form__input-value' value="She/Her"/>
                        <input type='button' name='pronouns' className='form__input-value' value="They/Them"/>
                    </div>
                <label className='form__label form__information'> Date of Birth <img src={question} alt="more information" className="form__information"/></label>
                    <input type='text' className='form__input-text' placeholder="DD/MM/YY"/>
                <label className='form__label'>Cell Phone Number</label>
                    <input type='text' className='form__input-text' placeholder="Enter phone number here"/>
                <div className="form__checkbox form__input-text--last">
                    <input type='checkbox'/>
                    <label className='form__label--checkbox'>Recieve text notifications from your favourite brands</label>
                </div>
                <Link to="/register/personalization" className='form__submit'>
                    Continue
                </Link>
            </form>

        </>
    )
}