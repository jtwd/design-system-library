const unit = 100

const ms = (value, multiplier = 1) => `${value * multiplier}ms`

export default {
  duration: {
    fast: ms(),
    base: ms(2),
    slow: ms(3),
    slower: ms(4),
    slowest: ms(6)
  },
  easing: {
    base: 'cubic-bezier(0.64, 0, 0.35, 1)',
    in: 'cubic-bezier(0.36, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.42, 1)',
    excite: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
    overshoot: 'cubic-bezier(0.07, 0.28, 0.32, 1.22)',
    anticipate: 'cubic-bezier(0.38, -0.4, 0.88, 0.65)'
  }
}
