import { readFile, writeFile } from 'fs/promises'
import postcss from 'postcss'
import postcssImport from 'postcss-import'

try {
  const from = './assets/css/main.css'
  const dest = './dist/style.css'

  const css = await readFile(from, { encoding: 'utf8' })

  postcss()
    .use(postcssImport)
    .process(css, { from })
    .then(result => writeFile(dest, result.css))
} catch (error) {
  console.error(error)
}
