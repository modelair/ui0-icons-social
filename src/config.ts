import type { RandevoIconConfig } from '@randevo/types'

const config: RandevoIconConfig = {
  viewBox: '0 0 960 960',
  useWeight: true,
  fillable: true,
  icons: {
    // 'volume': {
    //   progress: {
    //     type: 'step',
    //     steps: [10, 45, 80],
    //   },
    // },
    // 'menu': {
    //   progress: {
    //     type: 'step',
    //   },
    // },
    // 'list': {
    //   progress: {
    //     type: 'step',
    //   },
    // },
    //
    // sun: {
    //   progress: {
    //     type: 'radcw',
    //     radialOffset: 100,
    //     opacity: .7,
    //   },
    // },
  },
  badge: {
    rotateWithIcon: false,
    radius: 96,
    color: 'error',
    x: 600,
    y: 112,
  },

}

export default config
