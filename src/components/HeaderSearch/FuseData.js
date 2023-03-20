import path from 'path'
import i18n from '@/i18n'

export function generateRoutes(routes, basePath = '/', prefixTitle = []) {
  let res = []
  for (const route of routes) {
    const data = {
      path: path.resolve(basePath, route.path),
      title: [...prefixTitle]
    }
    const re = /.*\/:.*/
    if (route.meta && route.meta.title && !re.exec(route.path)) {
      data.title = [
        ...data.title,
        i18n.global.t(`msg.route.${route.meta.title}`)
      ]
      res.push(data)
    }
    if (route.children) {
      const temp = generateRoutes(route.children, data.path, data.title)
      if (temp.length > 0) {
        res = [...res, ...temp]
      }
    }
  }
  return res
}
