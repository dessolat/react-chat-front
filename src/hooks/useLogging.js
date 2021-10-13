import { useDispatch } from "react-redux"
import { setIsLogged } from "../redux/actionCreators"

const useLogging = () => {
	const dispatch = useDispatch()

	const login = value => {
		dispatch(setIsLogged(value))
	}

	return login
}

export default useLogging