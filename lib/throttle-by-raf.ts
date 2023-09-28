import { caf, raf } from "./raf"

export function throttleByRaf<T>(cb: (...args: T[]) => void) {
  let timer = 0

  const throttle = (...args: T[]): void => {
    if (timer) {
      caf(timer)
    }
    timer = raf(() => {
      cb(...args)
      timer = 0
    })
  }

  throttle.cancel = () => {
    caf(timer)
    timer = 0
  }

  return throttle
}
