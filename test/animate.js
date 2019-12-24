// Test 3

export const animate = ({start = 0, end, duration, cb}) => {
  const startTime = performance.now()
  const diff = end - start
  let raf = null
  let handler = (time) => {
    let diffTime = time - startTime
    if (diffTime >= duration) return
    const current = -diff * (diffTime /= duration) * (diffTime - 2)
    cb(current)
    raf = requestAnimationFrame(handler)
  }
  raf = requestAnimationFrame(handler)
  const cancel = () => {
    cancelAnimationFrame(raf)
  }
  return cancel
};
