import History from '@/router/History';
import { useNavigate } from 'react-router-dom';

const NavigateSetter = () => {
    History.navigate = useNavigate();

    return null;
};

export default NavigateSetter;
