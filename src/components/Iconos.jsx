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
    icono: <Icon icon="vscode-icons:file-type-html" width="100" height="100" />,
  },
  {
    id: 2,
    icono: <Icon icon="vscode-icons:file-type-css" width="100" height="100" />,
  },
  {
    id: 3,
    icono: <Icon icon="logos:javascript" width="100" height="100" />,
  },
  {
    id: 4,
    icono: <Icon icon="logos:react" width="100" height="100" />,
  },
  {
    id: 5,
    icono: <Icon icon="logos:spring-icon" width="100" height="100" />,
  },
  {
    id: 6,
    icono: <Icon icon="logos:mysql" width="100" height="100" />,
  },
  {
    id: 7,
    icono: <Icon icon="logos:hibernate" width="100" height="100" />,
  },
]

export const HTML = () => {
  return <Icon icon="vscode-icons:file-type-html" width="100" height="100" />
}

export const CSS = () => {
  return <Icon icon="vscode-icons:file-type-css" width="100" height="100" />
}

export const JS = () => {
  return <Icon icon="logos:javascript" width="100" height="100" />
}

export const React = () => {
  return <Icon icon="logos:react" width="100" height="100" />
}

export const Spring = () => {
  return <Icon icon="logos:spring-icon" width="100" height="100" />
}

export const MySQL = () => {
  return <Icon icon="logos:mysql" width="100" height="100" />
}

export const Hibernate = () => {
  return <Icon icon="logos:hibernate" width="100" height="100" />
}
