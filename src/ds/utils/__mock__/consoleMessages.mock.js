export default {
  colorName: {
    template: 'missingVariant',
    status: 'error',
    msgDetails: {
      fnName: 'Color',
      value: 'name',
      returned: 'RED: #ff0000',
      config: 'color'
    }
  },
  variationType: {
    template: 'missingVariant',
    status: 'log',
    msgDetails: {
      fnName: 'Variation',
      pre: 'type',
      value: 'type',
      config: 'color'
    }
  },
  depthAmount: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'Depth',
      value: 'amount',
      returned: '"100"',
      config: 'depth'
    }
  }
}
