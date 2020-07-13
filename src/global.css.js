import { createGlobalStyle } from 'styled-components'
import { grey } from 'constants/theme'
import '../static/fonts/index.css'

const GlobalStyle = createGlobalStyle`
  html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}*,::before,::after{background-repeat:no-repeat;box-sizing:inherit}::before,::after{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}figcaption,figure,main{display:block}hr{box-sizing:content-box;height:0;overflow:visible}ol,ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:hover,a:active{outline:none}abbr[title]{border-bottom:none;text-decoration:none}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}img,embed,iframe,object,audio,video,input,textarea{height:auto;max-width:100%}audio,canvas,iframe,img,svg,video{vertical-align:middle}iframe{border:0}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;text-align:inherit;font-family:inherit;font-size:inherit;line-height:inherit}fieldset{min-width:0;border:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:none}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}a,area,button,input,label,select,summary,textarea,[tabindex]{-ms-touch-action:manipulation;touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]:not(:focus){clip:rect(0, 0, 0, 0);display:inherit;position:absolute}[aria-disabled]{cursor:default}

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body, html {
    font-family: "Montserrat",sans-serif;    
  }

  *,*:before,*:after {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  body {
    margin: 0;
    height: 100%;
    color: #fff;
    font-size: 1.6rem;
    -webkit-text-size-adjust: 100%;
  }

  a {
    color: ${grey};
    text-decoration: none;
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) {
    input[type="email"]:hover,
    input[type="number"]:hover,
    input[type="search"]:hover,
    input[type="text"]:hover,
    input[type="tel"]:hover,
    input[type="url"]:hover,
    input[type="password"]:hover,
    textarea:hover,
    select:hover{font-size: initial;}
  }

  @media (min-width: 768px) {
    input[type="email"]:hover,
    input[type="number"]:hover,
    input[type="search"]:hover,
    input[type="text"]:hover,
    input[type="tel"]:hover,
    input[type="url"]:hover,
    input[type="password"]:hover,
    textarea:hover,
    select:hover{font-size: inherit;}
  }

  * {
    -webkit-overflow-scrolling: touch;
  }

  abbr[title] {
    border-bottom: none !important;
    cursor: inherit !important;
    text-decoration: none !important;
  }

  [data-reach-dialog-overlay] {
    z-index: 100;
  }

  .spacer-1 {
    height: 12rem;
  }

  .spacer-2 {
    height: 8rem;
  }

  .spacer-3 {
    height: 4rem;
  }
`

export default GlobalStyle
