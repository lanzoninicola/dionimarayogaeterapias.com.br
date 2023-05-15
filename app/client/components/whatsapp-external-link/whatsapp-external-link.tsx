import ExternalLink from "../primitives/external-link/external-link";

interface WhatsappExternalLinkProps {
  ariaLabel: string;
  message?: string;
  children: React.ReactNode;
  style?: string
}

const WHATSAPP_NUMBER = "5546991364002";

export default function WhatsappExternalLink({
  ariaLabel,
  message,
  children,
  style
}: WhatsappExternalLinkProps) {
  const whatsappLink = message
    ? `https://wa.me/send?phone=${WHATSAPP_NUMBER}&text=${message}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

  const clazzName = style ? style : "relative w-full";

  return (
    <ExternalLink
      to={whatsappLink}
      ariaLabel={`${ariaLabel} com WhatsApp`}
      className={clazzName}
    >
      {children}
    </ExternalLink>
  );
}