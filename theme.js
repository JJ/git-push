// example theme.js
import { future } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import prismBash from 'react-syntax-highlighter/languages/prism/bash'
const monospace = 'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace'
const allerta = 'Allerta Stencil, sans-serif'
const opensans = 'Open Sans, sans-serif'

export default {
	...future,
    font: allerta, opensans,
    heading: {
	fontFamily: allerta,
    },
    h1: {
	fontSize: '5em',
	textTransform: 'none',
	fontFamily: allerta,
    },
    h2: {
	fontSize: '3em',
	textTransform: 'none',
	fontFamily: opensans,
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

