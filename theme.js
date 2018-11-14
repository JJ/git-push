// example theme.js
import { future } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import prismBash from 'react-syntax-highlighter/languages/prism/bash'
const monospace = 'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace'
const h1font = "Oswald, sans-serif"
const h2font = "'Open Sans', sans-serif"

export default {
	...future,
    font: h1font, h2font,
    h1: {
	fontSize: '5em',
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
	    bash: prismBash
	}
    }
    
}

