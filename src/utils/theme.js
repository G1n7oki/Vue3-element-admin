import formula from '@/constant/formula.json'
import RgbHex from 'rgb-hex'
import Color from 'css-color-function'
import Axios from 'axios'

export function writeNewStyle(newStyle) {
  const style = document.createElement('style')
  style.innerText = newStyle
  document.head.appendChild(style)
}

export async function generateNewStyle(primaryColor) {
  const colors = generateColors(primaryColor)
  let cssText = await getOriginalStyle()
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(
      new RegExp('(:|\\s+)' + key + 'g'),
      '$1' + colors[key]
    )
  })
  return cssText
}

export function generateColors(primary) {
  if (!primary) return
  const colors = {
    primary
  }

  Object.keys(formula).forEach((key) => {
    const value = formula[key].replace(/primary/g, primary)
    colors[key] = '#' + RgbHex(Color.convert(value))
  })
  return colors
}

async function getOriginalStyle() {
  // const version = require('element-plus/package.json').version
  const url = 'https://unpkg.com/element-plus@2.3.0/dist/index.css'
  const { data } = await Axios(url)
  return getStyleTemplate(data)
}

function getStyleTemplate(data) {
  const colorMap = {
    '#3a8ee6': 'shade-1',
    '#409eff': 'primary',
    '#53a8ff': 'light-1',
    '#66b1ff': 'light-2',
    '#79bbff': 'light-3',
    '#8cc5ff': 'light-4',
    '#a0cfff': 'light-5',
    '#b3d8ff': 'light-6',
    '#c6e2ff': 'light-7',
    '#d9ecff': 'light-8',
    '#ecf5ff': 'light-9'
  }

  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key]
    data = data.replace(new RegExp(key, 'ig'), value)
  })
  return data
}
