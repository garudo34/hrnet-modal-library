# HRnet Modal Library

## Installation :

- To install, you can use npm or yarn: `npm install hrnet-modal-library` or `yarn add hrnet-modal-library`

## Usage

```jsx
import { useState } from 'react'
import { Modal } from 'hrnet-modal-library'

export const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Lorem ipsum...
      </Modal>
    </>
  )
}
```

- isOpen : boolean | Contains the state (opened(true) or closed(false))
- onClose : function | Calls the function which close the modal
