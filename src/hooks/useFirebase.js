

const useFirebase = () => {
    // to format into dollar
    const currency = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    })

// to set the budget progress bar
    const progressBarVariant = (cost, total) => {
        const ratio = cost / total;
        if (ratio < 0.5) return "primary"
        if (ratio < 0.75) return "warning"
        return "danger"
    }


















    return {
        currency,
        progressBarVariant
    };
};

export default useFirebase;