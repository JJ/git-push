// example theme.js
import { future } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import prismBash from 'react-syntax-highlighter/languages/prism/bash'
import prismYaml from 'react-syntax-highlighter/languages/prism/yaml'

const monospace = 'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace'
const h1font = "Archivo, sans-serif"
const h2font = "'Open Sans', sans-serif"

export default {
	...future,
    font: h1font, h2font,
    h1: {
	fontSize: '4em',
	textTransform: 'none',
	fontFamily: h1font
    },
    h2: {
	fontSize: '3em',
	textTransform: 'none',
	fontFamily: h2font,
    },
    code: {
      	fontSize: '1.5em',
    },
    prism: {
	style: okaidia,
	languages: {
	  bash: prismBash,
          yaml: prismYaml
	}
    }
    
}

