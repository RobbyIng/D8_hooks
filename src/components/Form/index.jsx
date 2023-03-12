import { useState } from "react"

export const Form = ({addToList}) => {

const [value, setValue] = useState('')

const handleSubmit = (event) =>{
    event.preventDefault()
    addToList(value)
   return setValue("");
}

    return (
        <form 
            onSubmit={(event) => handleSubmit(event)} 
            className="d-flex justify-content-center align-items-center mt-3"
        >
            <div className="mx-3">
                <input 
                placeholder="Задача"
                value={value} 
                required
                name='onetodo'
                onChange={(event) => setValue(event.target.value)} 
                type="text" 
                className="form-control"/>
            </div>
            <button type="submit" className="btn btn-success">Добавить</button>
        </form>
    )
}