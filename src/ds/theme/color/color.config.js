export default {
  palette: {
    primary: {
      hex: '#5252ed',
      type: 'brand'
    },
    secondary: {
      hex: '#b885fb',
      type: 'brand'
    },
    tertiary: {
      hex: '#3aa6fe',
      type: 'brand'
    },
    warning: {
      hex: '#fec541',
      type: 'feedback'
    },
    error: {
      hex: '#ff5656',
      type: 'feedback'
    },
    success: {
      hex: '#35c873',
      type: 'feedback'
    },
    info: {
      hex: '#4285f4',
      type: 'feedback'
    },
    ink: {
      hex: '#c0c3c7',
      type: 'neutral'
    }
  },
  types: {
    brand:
      "the personality of the brand. They should be used as accent elements such as primary buttons, CTA's and links.",
    feedback: 'are used to communicate Status to the user',
    neutral: 'used for things like text, borders, shadows, background colors, etc.'
  },
  variations: {
    color: {
      ids: ['lightest', 'lighter', 'light', 'base', 'dark', 'darker', 'darkest'],
      unit: 10,
      baseId: 'base',
      description:
        'Every colour in the System is defined above. Each heu has a Base and from this, I extract shades and tints of that heu. This provides a predictable colour scale of "allowed" colours in the system; ({{ids}}). I use a {{unit}}% increment and decrement.'
    },
    alpha: {
      ids: ['lightest', 'lighter', 'light', 'base', 'dark', 'darker', 'darkest'],
      unit: 12,
      baseId: 'base',
      baseVal: 50,
      description:
        'Each available colour has a range of alpha values; ({{ids}}). Base is {{baseVal}}% opacity, I use a {{unit}}% increment and decrement.'
    }
  },
  systemErrorColor: '#ff0000'
}
