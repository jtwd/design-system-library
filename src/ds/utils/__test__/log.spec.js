import { log as logFn, formatConsoleMsg, logError } from '../log'
import systemConfig from '../../constants/system'
import consoleMessageMock from '../__mock__/consoleMessages.mock'

const warn = jest.fn()
const error = jest.fn()
const log = jest.fn()

global.console = { warn, error, log }

const { logPrefix } = systemConfig

describe('log utility function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('executes the correct console method and return the correct string', () => {
    logFn('Test log message', 'log', 'prefix: ')
    expect(log).toHaveBeenCalledWith('prefix: Test log message')
    logFn('Test warn message', 'warn', 'prefix: ')
    expect(warn).toHaveBeenCalledWith('prefix: Test warn message')
    logFn('Test error message', 'error', 'prefix: ')
    expect(error).toHaveBeenCalledWith('prefix: Test error message')
  })

  describe('when override is true', () => {
    it('returns null and does nothing', () => {
      expect(logFn('Test log message', 'log', 'prefix: ', true)).toBe(null)
    })
  })

  describe('when no action is provided', () => {
    it('falls back to log', () => {
      logFn('Test log message', undefined, 'prefix: ')
      expect(log).toHaveBeenCalledWith('prefix: Test log message')
    })
  })

  describe('when an unknown action is provided', () => {
    it('falls back to log', () => {
      logFn('Test log message', 'shout', 'prefix: ')
      expect(log).toHaveBeenCalledWith('prefix: Test log message')
    })
  })

  it('appends the default prefix', () => {
    logFn('Test log message', 'log')
    expect(log).toHaveBeenCalledWith(`${logPrefix}Test log message`)
  })
})

describe('formatConsoleMsg utility function', () => {
  it('returns a correctly formatted message based on template and message configs', () => {
    const {
      variationType: { template, msgDetails }
    } = consoleMessageMock
    expect(formatConsoleMsg(template, msgDetails)).toBe(
      `Variation type '[type]' has not been configured. Check color config.`
    )
  })

  describe('when template has not been configured', () => {
    const msgDetails = {}
    it('returns null and does nothing', () => {
      expect(formatConsoleMsg('unknownTemplete', msgDetails)).toBe(null)
    })
  })
})

describe('logError utility function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('logs a formatted, preformatted message based on consoleMessageConfig', () => {
    logError('depthAmount', { amount: 'hello' }, consoleMessageMock)
    expect(warn).toHaveBeenCalledWith(
      `ds utils: Depth 'hello' has not been configured. Returned "100". Check depth config.`
    )
    logError('colorName', { name: 'hello' }, consoleMessageMock)
    expect(error).toHaveBeenCalledWith(
      `ds utils: Color 'hello' has not been configured. Returned RED: #ff0000. Check color config.`
    )
    logError('variationType', { type: 'hello' }, consoleMessageMock)
    expect(log).toHaveBeenCalledWith(
      `ds utils: Variation type 'hello' has not been configured. Check color config.`
    )
  })

  it('works with default config', () => {
    logError('colorName', { name: 'aqua' })
    expect(warn).toHaveBeenCalledWith(
      `ds utils: Color 'aqua' has not been configured. Returned RED: #ff0000. Check color config.`
    )
  })

  describe('when error is not configured', () => {
    it('returns null and does nothing', () => {
      expect(logError('unknownError', {})).toBe(null)
    })
  })
})
