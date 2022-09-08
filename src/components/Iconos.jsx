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

export const HTML = () => {
  return <Icon icon="vscode-icons:file-type-html" width="255" height="255" />
}

export const CSS = () => {
  return <Icon icon="vscode-icons:file-type-css" width="255" height="255" />
}

export const JS = () => {
  return <Icon icon="logos:javascript" width="255" height="255" />
}

export const Spring = () => {
  return <Icon icon="logos:spring-icon" width="255" height="255" />
}

export const Hibernate = () => {
  return <Icon icon="logos:hibernate" width="255" height="255" />
}

export const React = () => {
  return <Icon icon="logos:react" width="255" height="255" />
}

export const MySQL = () => {
  return <Icon icon="logos:hibernate" width="255" height="255" />
}
