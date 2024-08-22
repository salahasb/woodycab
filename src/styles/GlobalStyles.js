import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 /***************** Normalization *****************************/
*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */

}

::before,
::after {
  --tw-content: '';
}

 
html {
  font-size: 62.5%;
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  tab-size: 4; /* 3 */
  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"); /* 4 */
  font-feature-settings: theme('fontFamily.sans[1].fontFeatureSettings', normal); /* 5 */
  font-variation-settings: theme('fontFamily.sans[1].fontVariationSettings', normal); /* 6 */
}

  
body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);
  font-size: 1.6rem;
  margin: 0;
  line-height: inherit; /* 2 */
  position: relative;
}

 
hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

 

abbr:where([title]) {
  text-decoration: underline dotted;
}

 

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

 

a {
  color: inherit;
  text-decoration: inherit;
}

 

b,
strong {
  font-weight: bolder;
}

 

code,
kbd,
samp,
pre {
  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace); /* 1 */
  font-feature-settings: theme('fontFamily.mono[1].fontFeatureSettings', normal); /* 2 */
  font-variation-settings: theme('fontFamily.mono[1].fontVariationSettings', normal); /* 3 */
  font-size: 1em; /* 4 */
}

 
small {
  font-size: 80%;
}

 
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

 
table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}
 
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}
 
button,
select {
  text-transform: none;
}
 

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

 
:-moz-focusring {
  outline: auto;
}

 
:-moz-ui-invalid {
  box-shadow: none;
}

 
progress {
  vertical-align: baseline;
}
 
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

 
[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

 

::-webkit-search-decoration {
  -webkit-appearance: none;
}

 

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

 
summary {
  display: list-item;
}

 
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

 
dialog {
  padding: 0;
}
 

textarea {
  resize: vertical;
}

 

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: theme('colors.gray.400', #9ca3af); /* 2 */
}

 

button,
[role="button"] {
  cursor: pointer;
}

 
:disabled {
  cursor: default;
}

 
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

 

img,
video {
  max-width: 100%;
  height: auto;
}

 [hidden] {
  display: none;
}
 


/***************** Root *****************************/
:root{

  /* Indigo colors (tints & shades)  */
--color-brand-50:#eef2ff;
--color-brand-100:#e0e7ff;
--color-brand-200:#c7d2fe;
--color-brand-300:#a5b4fc;
--color-brand-400:#818cf8;
--color-brand-500:#6366f1;
--color-brand-600:#4f46e5;
--color-brand-700:#4338ca;
--color-brand-800:#3730a3;
--color-brand-900:#312e81;
--color-brand-950:#1e1b4b;
 
/* borders */
--border-radius-tiny: 3px;
--border-radius-sm: 5px;
--border-radius-md: 7px;
--border-radius-lg: 9px;

--border-main: solid 1px  var(--color-grey-200);

/* Transitions & Animations */
--button-transition: color 0.3s, background-color 0.3s;


/* Light Mode */
&,&.light-mode{
  
  /* pallet colors */
  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-500: #eab308;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;
  
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  /* Grey colors */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0,0,0,0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0,0,0,0.12);

}


    
/* FOR DARK MODE */
&.dark-mode {
  --color-grey-0: #18212f;
  --color-grey-50: #111827;
  --color-grey-100: #1f2937;
  --color-grey-200: #374151;
  --color-grey-300: #4b5563;
  --color-grey-400: #6b7280;
  --color-grey-500: #9ca3af;
  --color-grey-600: #d1d5db;
  --color-grey-700: #e5e7eb;
  --color-grey-800: #f3f4f6;
  --color-grey-900: #f9fafb;
  
  --color-blue-100: #075985;
  --color-blue-700: #e0f2fe;
  --color-green-100: #166534;
  --color-green-700: #dcfce7;
  --color-yellow-100: #854d0e;
  --color-yellow-700: #fef9c3;
  --color-silver-100: #374151;
  --color-silver-700: #f3f4f6;
  --color-indigo-100: #3730a3;
  --color-indigo-700: #e0e7ff;
  
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  
  --backdrop-color: rgba(0, 0, 0, 0.3);
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  
  --image-grayscale: 10%;
  --image-opacity: 90%;
  
}


  

 



}

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 





















 */
// const GlobalStyles = createGlobalStyle`;
// :root {
//   /* Indigo */
//   --color-brand-50: #eef2ff;
//   --color-brand-100: #e0e7ff;
//   --color-brand-200: #c7d2fe;
//   --color-brand-500: #6366f1;
//   --color-brand-600: #4f46e5;
//   --color-brand-700: #4338ca;
//   --color-brand-800: #3730a3;
//   --color-brand-900: #312e81;

//   /* Grey */
//   --color-grey-0: #fff;
//   --color-grey-50: #f9fafb;
//   --color-grey-100: #f3f4f6;
//   --color-grey-200: #e5e7eb;
//   --color-grey-300: #d1d5db;
//   --color-grey-400: #9ca3af;
//   --color-grey-500: #6b7280;
//   --color-grey-600: #4b5563;
//   --color-grey-700: #374151;
//   --color-grey-800: #1f2937;
//   --color-grey-900: #111827;

//   --color-blue-100: #e0f2fe;
//   --color-blue-700: #0369a1;
//   --color-green-100: #dcfce7;
//   --color-green-700: #15803d;
//   --color-yellow-100: #fef9c3;
//   --color-yellow-700: #a16207;
//   --color-silver-100: #e5e7eb;
//   --color-silver-700: #374151;
//   --color-indigo-100: #e0e7ff;
//   --color-indigo-700: #4338ca;

//   --color-red-100: #fee2e2;
//   --color-red-700: #b91c1c;
//   --color-red-800: #991b1b;

//   --backdrop-color: rgba(255, 255, 255, 0.1);

//   --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
//   --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
//   --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

//   --border-radius-tiny: 3px;
//   --border-radius-sm: 5px;
//   --border-radius-md: 7px;
//   --border-radius-lg: 9px;

//   /* For dark mode */
//   --image-grayscale: 0;
//   --image-opacity: 100%;
// }

// *,
// *::before,
// *::after {
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;

//   /* Creating animations for dark mode */
//   transition: background-color 0.3s, border 0.3s;
// }

// html {
//   font-size: 62.5%;
// }

// body {
//   font-family: "Poppins", sans-serif;
//   color: var(--color-grey-700);

//   transition: color 0.3s, background-color 0.3s;
//   min-height: 100vh;
//   line-height: 1.5;
//   font-size: 1.6rem;
// }

// input,
// button,
// textarea,
// select {
//   font: inherit;
//   color: inherit;
// }

// button {
//   cursor: pointer;
// }

// *:disabled {
//   cursor: not-allowed;
// }

// select:disabled,
// input:disabled {
//   background-color: var(--color-grey-200);
//   color: var(--color-grey-500);
// }

// input:focus,
// button:focus,
// textarea:focus,
// select:focus {
//   outline: 2px solid var(--color-brand-600);
//   outline-offset: -1px;
// }

// /* Parent selector, finally 😃 */
// button:has(svg) {
//   line-height: 0;
// }

// a {
//   color: inherit;
//   text-decoration: none;
// }

// ul {
//   list-style: none;
// }

// p,
// h1,
// h2,
// h3,
// h4,
// h5,
// h6 {
//   overflow-wrap: break-word;
//   hyphens: auto;
// }

// img {
//   max-width: 100%;

//   /* For dark mode */
//   filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
// }

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
`;
*/

export default GlobalStyles;
