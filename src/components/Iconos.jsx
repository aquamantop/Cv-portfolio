import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Icon } from '@iconify/react'

export const Copyright = () => {
  return <FontAwesomeIcon icon={faCopyright} />
}

export const Linkedin = () => {
  return <FontAwesomeIcon icon={faLinkedin} />
}

export const Github = () => {
  return <FontAwesomeIcon icon={faSquareGithub} />
}

export const TecnoIconos = [
  {
    id: 1,
    tecno: 'HTML',
    icono: <Icon icon="vscode-icons:file-type-html" width="100" height="100" />,
  },
  {
    id: 2,
    tecno: 'CSS',
    icono: <Icon icon="vscode-icons:file-type-css" width="100" height="100" />,
  },
  {
    id: 3,
    tecno: 'JavaScript',
    icono: <Icon icon="logos:javascript" width="100" height="100" />,
  },
  {
    id: 4,
    tecno: 'React',
    icono: <Icon icon="logos:react" width="100" height="100" />,
  },
  {
    id: 5,
    tecno: 'Spring',
    icono: <Icon icon="logos:spring-icon" width="100" height="100" />,
  },
  {
    id: 6,
    tecno: 'MySQL',
    icono: <Icon icon="logos:mysql" width="100" height="100" />,
  },
  {
    id: 7,
    tecno: 'Mongo',
    icono: <Icon icon="vscode-icons:file-type-mongo" color="green" width="100" height="100" />,
  },
]
