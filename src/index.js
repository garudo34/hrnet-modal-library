import React from 'react'
import ReactDOM from 'react-dom/client'
import { Modal } from './lib'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Modal isOpen={true}> Affichage effectué avec succès !</Modal>)
