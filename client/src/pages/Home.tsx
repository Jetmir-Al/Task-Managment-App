import './pageStyles/home.css';
import Button from '../components/ui/Button';
import { useAccountToggle } from '../hooks/ToggleAccount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarDays, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import tmImage from "../assets/tm3.png";

const Home = () => {
    const { toggleAcc } = useAccountToggle();
    return (
        <div className="home-container">
            <img src={tmImage} alt="task manger image" />
            <div className="welcomeTitle">
                <h2>
                    Welcome to Task Manager
                </h2>
                <h5>
                    Boost your productivity and stay organized with Task Manager.
                    <br />
                    Lets get started!
                </h5>
                <Button
                    type={'button'}
                    onClick={() => toggleAcc()}
                    className={"welcomeBtn"}
                >
                    Get Started
                </Button>
            </div>

            <div className='welcomeCards'>
                <div className="welcomeCard">
                    <FontAwesomeIcon className='cardIcon'
                        icon={faCalendarCheck} />
                    <div className="cardInfo">
                        <h3>Organize</h3>
                        <p>Create and manage your tasks efficiently</p>
                    </div>
                </div>
                <div className="welcomeCard">
                    <FontAwesomeIcon className='cardIcon'
                        icon={faCalendarDays} />
                    <div className='cardInfo'>
                        <h3>Set Deadlines</h3>
                        <p>Set due dates to never miss an important deadline</p>
                    </div>
                </div>
                <div className="welcomeCard">
                    <FontAwesomeIcon className='cardIcon'
                        icon={faBell} />
                    <div className="cardInfo">
                        <h3>Stay Focused</h3>
                        <p>Recive reminders, and stay on track.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;