const missingVariant = msg =>
  `${msg.fnName}${msg.pre ? ` ${msg.pre}` : ''} '[${msg.value}]' has not been configured.${
    msg.returned ? ` Returned ${msg.returned}.` : ''
  }${msg.config ? ` Check ${msg.config} config.` : ''}`

export default {
  missingVariant
}
