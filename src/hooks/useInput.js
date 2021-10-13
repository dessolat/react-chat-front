import { useState } from "react"

const useInput = () => {
	const [value, setValue] = useState('')

	const handleChange = e => {
		setValue(e.target.value)
	}

	return [value, handleChange]
}

export default useInput