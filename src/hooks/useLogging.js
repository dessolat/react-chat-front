import { useDispatch } from 'react-redux';
import { setIsLogged, setName } from '../redux/actionCreators';

const useLogging = () => {
  const dispatch = useDispatch();

  const login = (isLogged, name) => {
    localStorage.setItem('isLogged', true);
    dispatch(setIsLogged(isLogged));
    if (name) {
      localStorage.setItem('name', name);
      name && dispatch(setName(name));
    }
  };

  return login;
};

export default useLogging;
