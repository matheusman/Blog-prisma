import React from 'react'

function useInput() {
    const [value, setValue] = React.useState<string>("")

    const onChange : React.ChangeEventHandler<HTMLInputElement> = event => {
        setValue(event.target.value)
    }
    return { value, onChange}

}

export default useInput