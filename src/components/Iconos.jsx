import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Copyright = () => {
  return <FontAwesomeIcon icon={faCopyright} />;
};

export const Linkedin = () => {
  return <FontAwesomeIcon icon={faLinkedin} />;
};

export const Github = () => {
  return <FontAwesomeIcon icon={faSquareGithub} />;
};
