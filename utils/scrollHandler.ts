import { animate, scroll, type ScrollOptions, type MotionKeyframesDefinition } from 'motion'

interface IAnimation {
  keyframes: MotionKeyframesDefinition
  params: ScrollOptions
}

export default () => {
  document.querySelectorAll('[data-scroll]').forEach((item) => {
    if (!(item instanceof HTMLElement)) return

    const animation: IAnimation = {
      keyframes: {
        opacity: [0.1, 1],
      },
      params: {
        container: document.querySelector('main')!,
        target: item,
        offset: ['start end', 'start start'],
      },
    }

    switch (item.dataset.scroll) {
      case 'zoom-me': {
        animation.keyframes = { transform: 'scale(1.2)' }

        animation.params.target = document.querySelector('.welcome__me')!
        animation.params.offset = undefined

        break
      }
      case 'show-me': {
        animation.params.target = document.querySelector('.welcome__me')!
        animation.params.offset = undefined

        break
      }
      case 'zoom-in': {
        animation.keyframes.transform = 'scale(1.4)'

        break
      }
      case 'slide-left': {
        animation.keyframes.transform = ['translateX(-2rem)', 'translateX(0)']

        break
      }
      case 'slide-right': {
        animation.keyframes.transform = ['translateX(2rem)', 'translateX(0)']

        break
      }
    }

    scroll(animate(item, animation.keyframes), animation.params)
  })
}
