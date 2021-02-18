const CurrencyTableHeader = ({ headings }) => {
    return (
        <table>
            <thead>
                <tr>{
                    headings.map((heading, index) => <th key={index}>{heading}</th>)
                }
                </tr>
            </thead>
        </table>
    )
}

export default CurrencyTableHeader;
