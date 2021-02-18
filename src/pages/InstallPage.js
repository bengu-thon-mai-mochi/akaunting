import InstallFormCard from '../components/InstallFormCard';
import HeaderLayout from '../layouts/HeaderLayout';

const InstallPage = () => {
    const steps = ['Language', 'Database', 'Admin'];

    return (
        <HeaderLayout>
            < div className="App" >
                <InstallFormCard steps={steps} />
            </div>
        </HeaderLayout>
    );
}

export default InstallPage;
