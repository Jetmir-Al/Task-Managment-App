import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div className="footer">
            <div>
                © {new Date().getFullYear()} Jetmir Alshiqi ~ <a href="https://github.com/Jetmir-Al">
                    GitHub <FontAwesomeIcon icon={faGithub} />
                </a> ~ <a href="https://github.com/Jetmir-Al/Task-Managment-App">
                    Source Code <FontAwesomeIcon icon={faCode} />
                </a>
            </div>

        </div>
    )
}

export default Footer;