
import { Form } from '../Form'
import React from 'react'
import './header.css'
function Header({ addToList}) {
    return (
        <>
        <header className="wrapper"></header>
        <Form addToList = {addToList}/>
      
        </>
    )
}


export {Header}

export const MemoHeader = React.memo(Header)
// export default Header