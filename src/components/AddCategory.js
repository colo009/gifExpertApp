import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = e => {
        setinputValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setCategories( cats => {
            setinputValue('')
            return [ inputValue, ...cats ]} )
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                id="inputx"
                type="text" 
                value={ inputValue } 
                onChange={ handleInputChange } />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
