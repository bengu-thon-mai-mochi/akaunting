import FormCard from '../components/FormCard';
import HeaderLayout from '../layouts/HeaderLayout';

const InstallPage = () => {
    const steps = ['Language', 'Database', 'Admin'];

    return (
        <HeaderLayout>
            < div className="App" >
                <FormCard steps={steps} />
            </div>
        </HeaderLayout>
    );
}

export default InstallPage;
