export default function TitleText({ className, children }) {
    return (
        <p className={`text-white text-2xl md:text-3xl font-bold ${className}`}>
            {children}
        </p>
    );
}
