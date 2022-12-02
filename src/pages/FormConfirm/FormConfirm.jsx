// import './UserSettingsForm.scss';

import { Link } from "react-router-dom";
import progressBar from '../../assets/images/progress-bar-confirm.svg';
import confirmationImage from '../../assets/images/confirmation-image.png';
import './FormConfirm.scss';

export default function UserSettingsForm() {
    return (
        <>
            <div className="register__progress">
                <img src={progressBar} />
            </div>

            <div className="confirm__image-div">
                <img className="confirm__image" src={confirmationImage} alt='Two friends, one with short hair and one with long hair, hold a "welcome" sign and wave at you while confetti falls around them.' />
            </div>

            <div className="confirm__info">
                <h1 className="confirm__header">Congratulations!</h1>
                <p className="confirm__details">Start collecting points and experience free rewards.</p>
            </div>

            <Link to="/" className='form__submit'>
                Continue
            </Link>
        </>
    )
}