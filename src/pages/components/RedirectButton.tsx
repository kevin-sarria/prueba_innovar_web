import { useNavigate } from 'react-router-dom';
import { RedirectButtonInterface } from "../../interfaces"


export const RedirectButton = ({ text, to }: RedirectButtonInterface) => {

  const navigate = useNavigate();

  const redirtectTo = () => {
    if(!to) return navigate('/');
    navigate(to);
  }

  return (
    <button
      className='button button--redirect'
      onClick={redirtectTo}
      >
        {text}
      </button>
  )
}