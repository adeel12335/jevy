import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import '@fontsource-variable/big-shoulders'
import '@fontsource-variable/archivo'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './styles.css'
import App from './App'
import { startSmoothScroll } from './smooth'

const root = document.getElementById('root')!
const tree = <React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>

/* Pages are prerendered to static HTML at build time, so in production there
   is already markup to take over rather than replace. */
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, tree)
else ReactDOM.createRoot(root).render(tree)

startSmoothScroll()
