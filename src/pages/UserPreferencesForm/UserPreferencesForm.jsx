// import './UserPreferencesForm/scss';
import { Link } from "react-router-dom";
import progressBar from '../../assets/images/progress-bar-preferences.svg';
import './UserPreferencesForm.scss';

export default function UserPreferencesForm() {

    return (
        <>
        <div className="register__progress">
            <img src={progressBar} />
        </div>

        <h1 className='register__header'>What are your interests?</h1>
        <form className='form'>
                    <div className="form__input-interests">
                        <input type='button' name='personalization' className='form__input-icon form__personalization-background-1' value="Music"/>
                        <input type='button' name='personalization' className='form__input-icon form__personalization-background-2' value="Fashion"/>
                        <input type='button' name='personalization' className='form__input-icon form__personalization-background-3' value="Fitness"/>
                        <input type='button' name='personalization' className='form__input-icon form__personalization-background-4' value="Movies"/>
                        <input type='button' name='personalization' className='form__input-icon form__personalization-background-5' value="Restaurants"/>
                        <input type='button' name='personalization' className='form__input-icon form__personalization-background-6' value="Health and Beauty"/>
                        <input type='button' name='personalization' className='form__input-icon form__personalization-background-7' value="Tech"/>
                        <input type='button' name='personalization' className='form__input-icon form__personalization-background-8' value="Home"/>
                        <input type='button' name='personalization' className='form__input-icon form__personalization-background-9' value="Travel"/>

                    </div>
            <Link to="/register/brands" className='form__submit'>
                Next
            </Link>
        </form>
        </>
    )
}