import { useHistory } from 'react-router-dom';

function LoginRedirect() {
  const history = useHistory();
  if (window.location.pathname === '/') {
    history.push('/login');
  }
  return ('');
}

export default LoginRedirect;
