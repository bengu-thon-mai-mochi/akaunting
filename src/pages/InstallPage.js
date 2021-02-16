import FormCard from '../components/FormCard';
import Header from '../components/Header';

const InstallPage = () => {
    const steps = ['Language', 'Database', 'Admin'];

    return (
        <div className="App">
            <FormCard steps={steps} />
        </div>
    );
}

export default InstallPage;
