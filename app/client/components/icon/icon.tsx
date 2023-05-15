import { Link } from "@remix-run/react";

const icons = {
    instagram: {
        src: "/assets/icons/instagram-sky.svg",
        alt: "Instagram Dioni Mara Yoga e Terapias"
    },
    whatsapp: {
        src: "/assets/icons/whatsapp-sky.svg",
        alt: "Whatsapp Dioni Mara Yoga e Terapias"
    },
    directions: {
        src: "/assets/icons/directions-sky.svg",
        alt: "Como chegar Dioni Mara Yoga e Terapias"
    },
}

interface IconProps {
    src: string
    alt: string
}

type Icon = Record<keyof typeof icons, IconProps>

interface IconUIProps {
    to: string
    variant: keyof typeof icons
}

export default function Icon({ to, variant }: IconUIProps) {

    if (!variant) return null

    return (
        <Link to={to}>
            <img
                className="w-8 h-8 md:w-12 md:h-12"
                src={icons[variant].src}
                alt={icons[variant].alt}
            />
        </Link>
    );
}
