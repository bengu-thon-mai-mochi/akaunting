import CurrencyTableHeader from './CurrencyTableHeader';
import AddButton from './AddButton';
import FormCardLayout from '../layouts/FormCardLayout';

const TaxDashboard = () => {
    const headings = ["NAME", "RATE", "ENABLED", "ACTIONS"];

    return (
        <FormCardLayout>
            <AddButton />
            <CurrencyTableHeader headings={headings} />
        </FormCardLayout>
    )
}

export default TaxDashboard;
