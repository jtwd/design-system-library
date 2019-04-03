export const breakpointsMock = {
  s: {
    minWidth: 48,
    columns: 8,
    gutterWidth: 1,
    paddingWidth: 1,
    container: 'full'
  },
  m: {
    minWidth: 64,
    columns: 8,
    gutterWidth: 1.5,
    paddingWidth: 1.5,
    container: 'full'
  },
  l: {
    minWidth: 90,
    columns: 12,
    gutterWidth: 1.5,
    paddingWidth: 1.5,
    container: 90
  }
}

export const breakpointsMockInvalidConfig = {
  s: {
    columns: 8,
    gutterWidth: 1,
    paddingWidth: 1,
    container: 'full'
  },
  m: {
    columns: 8,
    gutterWidth: 1.5,
    paddingWidth: 1.5,
    container: 'full'
  },
  l: {
    columns: 12,
    gutterWidth: 1.5,
    paddingWidth: 1.5,
    container: 90
  }
}

export const gridConfig = {
  breakpoints: {
    s: 48,
    m: 64,
    l: 90
  },
  columns: {
    s: 8,
    m: 8,
    l: 12
  },
  gutterWidth: {
    s: 1,
    m: 1.5,
    l: 1.5
  },
  paddingWidth: {
    s: 1,
    m: 1.5,
    l: 1.5
  },
  container: {
    s: 'full',
    m: 'full',
    l: 90
  }
}
