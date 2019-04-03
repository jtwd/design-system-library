export default {
  colorName: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'Color',
      value: 'name',
      returned: 'RED: #ff0000',
      config: 'color'
    }
  },
  colorVariant: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'Color',
      pre: 'variant',
      value: 'variant',
      returned: 'Base color',
      config: 'color'
    }
  },
  alphaVariant: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'Alpha',
      pre: 'variant',
      value: 'variant',
      returned: 'Base alpha value',
      config: 'color'
    }
  },
  variationType: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'Variation',
      pre: 'type',
      value: 'type',
      config: 'color'
    }
  },
  variant: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'Variation',
      value: 'variant',
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
  },
  zIndexVariation: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'zIndex',
      value: 'level',
      returned: '0',
      config: 'depth'
    }
  },
  spaceSize: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'Space',
      pre: 'value',
      value: 'size',
      returned: `Base alpha value '[value]'`,
      config: 'space'
    }
  },
  breakpointVariant: {
    template: 'missingVariant',
    status: 'error',
    msgDetails: {
      fnName: 'Breakpoint',
      pre: 'variant',
      value: 'bp',
      returned: 'false',
      config: 'space'
    }
  },
  breakpointMinWidth: {
    template: 'missingVariant',
    status: 'error',
    msgDetails: {
      fnName: 'Breakpoint',
      pre: 'min-width for breakpoint',
      value: 'bp',
      returned: 'false',
      config: 'space'
    }
  },
  fontStack: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'Font',
      pre: 'family',
      value: 'family',
      returned: 'Base font family',
      config: 'typography'
    }
  },
  fontWeight: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'FontWeight',
      value: 'weight',
      returned: 'Normal font weight',
      config: 'typography'
    }
  },
  fontSizeVariant: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'FontSize',
      pre: 'variant',
      value: 'size',
      returned: 'Base font size value',
      config: 'typography'
    }
  },
  durationVariant: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'Duration',
      pre: 'variant',
      value: 'variant',
      returned: 'Base duration value',
      config: 'motion'
    }
  },
  easingVariant: {
    template: 'missingVariant',
    status: 'warn',
    msgDetails: {
      fnName: 'Easing',
      pre: 'variant',
      value: 'variant',
      returned: 'Base easing value',
      config: 'motion'
    }
  }
}
