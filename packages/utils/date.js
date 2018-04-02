const formatDate = (date, fmt) => {
  const objRegExp = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').slice(4 - RegExp.$1.length))
  }

  Object.keys(objRegExp).forEach((key) => {
    if (new RegExp(`(${key})`).test(fmt)) {
      let item = objRegExp[key].toString()
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? item : ('00' + item).slice(item.length))
    }
  })

  return fmt
}

const formatNum = (num) => {
  return ('' + num).length > 1 ? num : ('0' + num)
}

export {
  formatDate,
  formatNum
}
