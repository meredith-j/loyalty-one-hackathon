import { Link } from "react-router-dom";
import progressBar from '../../assets/images/progress-bar-brands.svg';
import './UserPreferencesBrand.scss';

export default function UserPreferencesBrand() {
    return (
        <>
            <div className="register__progress">
                <img src={progressBar} />
            </div>

            <h1 className='register__header'>Which popular brands do you like?</h1>
            <form className='form'>
                <div className="form__input-brands">
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-1'/>
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-2'/>
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-3'/>
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-4'/>
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-5'/>
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-6'/>
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-7'/>
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-8'/>
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-9'/>
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-10'/>
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-11'/>
                    <input type='button' name='pronouns' className='form__input-icon form__brands-background-12'/>
                </div>
                <Link to="/register/refer" className='form__submit'>
                    Next
                </Link>
            </form>
        </>
    )
}