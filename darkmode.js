const html = document.querySelector('html')
const checkbox = document.getElementById('switch')

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
  colorFourth: getStyle(html, '--color-fourth'),
  colorFont: getStyle(html, '--color-font')
}

const darkMode = {
  colorFourth: '#021e28',
  colorFont: '#f8f8ff'
}

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

const changeColors = colors => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  )
}

checkbox.addEventListener('change', ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
