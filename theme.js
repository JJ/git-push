// example theme.js
import { future } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia'
import prismBash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import prismYaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'
import prismPerl from 'react-syntax-highlighter/dist/esm/languages/prism/perl'
import prismIni from 'react-syntax-highlighter/dist/esm/languages/prism/ini'

const monospace = 'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace'
const h1font = "Archivo, sans-serif"
const h2font = "'Open Sans', sans-serif"

export default {
	...future,
    font: h1font, h2font,
    h1: {
	fontSize: '3.5em',
	textTransform: 'none',
	fontFamily: h1font
    },
    h2: {
	fontSize: '2.75em',
	textTransform: 'none',
	fontFamily: h2font,
    },
    code: {
      	fontSize: '1.1em',
    },
    prism: {
	style: okaidia,
	languages: {
	  bash: prismBash,
          yaml: prismYaml,
          perl: prismPerl,
          ini: prismIni,
	}
    }
    
}

