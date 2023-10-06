interface CapitalizeI {
    text: string;
}
const Capitalize = ({ text }: CapitalizeI) => {
    if (!text) return null;

    const capitalizedText = text
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return <span>{capitalizedText}</span>;
};

export default Capitalize;
