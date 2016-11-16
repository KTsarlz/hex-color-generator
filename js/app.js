function getColor () {
  return '#' + Math.random().toString(16).slice(2,6)
}

document.write(getColor())
