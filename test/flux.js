// Test 1 

export const flux = (raw) => {
  let ret = []
  if (!/^\d+$/.test(raw)) {
    console.log('invalid param:', raw)
    return ret
  }
  const num = parseInt(raw)
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      const t1 = 'up&down'
      ret.push(t1)
      console.log(t1)
    } else if (i % 3 === 0) {
      const t2 = 'up'
      ret.push(t2)
      console.log(t2)
    } else if (i % 5 === 0) {
      const t3 = 'down'
      ret.push(t3)
      console.log('down')
    } else {
      ret.push(i)
      console.log(i)
    }
    
  }
  return ret
  
};