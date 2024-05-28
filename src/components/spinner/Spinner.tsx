import { IonSpinner } from "@ionic/react"
import './Spinner.css';

const Spinner: React.FC = () => {

    return (        
        <span className='spinner-container'>
            <IonSpinner color="primary"></IonSpinner>
        </span>
    )
}

export default Spinner;
