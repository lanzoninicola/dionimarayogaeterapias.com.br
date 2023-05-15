interface ExternalLinkProps {
    to: string;
    children: React.ReactNode;
    ariaLabel: string;
    [key: string]: any;
}

export default function ExternalLink({
    to,
    children,
    ariaLabel,
    ...props
}: ExternalLinkProps) {
    return (
        <a
            href={to}
            aria-label={ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {children}
        </a>
    );
}