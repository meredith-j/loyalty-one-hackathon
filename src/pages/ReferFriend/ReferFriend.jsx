import './ReferFriend.scss';
import { Link } from 'react-router-dom';
import progressBar from '../../assets/images/progress-bar-refer.svg';
import referFriend from '../../assets/images/refer-friend.svg';

export default function ReferFriend() {

    return (
        <>
            <div className="register__progress">
                <img src={progressBar} />
            </div>
            
            <div className='refer__image-div'>
                <img className='refer__image' src={referFriend} alt='Two friends - a man and a woman wearing blue shirts and black pants - sit at a desk brainstorming ideas on a whiteboard while taking notes on their electronics.'/>
            </div>

            <p className='refer__info'>Refer a friend!</p>
            <p className='refer__info refer__info--bottom'>You’ll each get 100 points.</p>
            
            <Link to="/register/confirm" className='form__submit'>
                Continue
            </Link>

            <Link to="/register/confirm" className='refer__skip'>
                Skip
            </Link>
        </>
    )
}