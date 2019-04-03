import config from '../theme/config'
import consoleMessages from '../constants/consoleMessages'
import consoleMessageTemplates from '../constants/consoleMessageTemplates'
import system from '../constants/system'
import copyReplacer from './copyReplacer'

export const log = (
  message,
  logStatus = 'log',
  msgPrefix = system.logPrefix,
  override = !config.devMode
) => {
  /* eslint-disable no-console */
  if (override) return null
  if (!console[logStatus]) return console.log(`${msgPrefix}${message}`)
  console[logStatus](`${msgPrefix}${message}`)
  /* eslint-enable no-console */
}

export const formatConsoleMsg = (
  template,
  msgDetails,
  messageTemplates = consoleMessageTemplates
) => {
  const msgTemplate = messageTemplates[template]
  if (!msgTemplate) {
    log(`logError: '${msgTemplate}' template was not defined`, 'error')
    return null
  }
  return msgTemplate(msgDetails)
}

export const logError = (errorName, replacers, msgConfig = consoleMessages) => {
  const error = msgConfig[errorName]
  if (!error) {
    log(`logError: '${errorName}' was not defined`, 'warn')
    return null
  }
  const { template, status, msgDetails } = error
  const message = formatConsoleMsg(template, msgDetails)
  log(copyReplacer(message, replacers), status)
}
