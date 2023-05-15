interface ButtonLinkProps {
    label: string;
    to: string;
    children?: React.ReactNode;
}

export function ButtonLink({ label, to, children }: ButtonLinkProps) {
    return (
        <a
            href={to}
            className="flex justify-center rounded-full bg-sky-500 py-5 px-8 font-semibold shadow-md hover:bg-sky-600 hover:text-white transition-colors duration-300"
        >
            <span className="text-md tracking-wider">{label}</span>
        </a>
    );
}

export function ButtonLinkSpotted({ label, to, children }: ButtonLinkProps) {
    return (
        <a
            href={to}
            className="flex justify-center rounded-full bg-sky-700 py-5 px-8 font-semibold shadow-md hover:bg-sky-600 hover:text-white transition-colors duration-300"
        >
            {children || <span className="text-md text-white uppercase tracking-wider">{label}</span>}
        </a>
    );
}
