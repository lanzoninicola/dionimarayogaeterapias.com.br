import Icon from "../icon/icon";
import Container from "../layout/container/container";
import Logo from "../logo/logo";



export default function Header() {

    return <Container>
        <header className="mb-8">
            <div className="flex justify-center mb-4">
                <Logo variant="sky" />
            </div>
            <div className="grid grid-cols-3">
                <HeaderIconGroup variant="instagram" label="Instagram" to="https://www.instagram.com/yogaterapia_dionimara/" />
                <HeaderIconGroup variant="whatsapp" label="Whatsapp" to="https://wa.me/5546991364002?text=Ol%C3%A1%2C+tudo+bem%3F+Gostaria+agendar+%3Ccoloque+o+servi%C3%A7o%3E" />
                <HeaderIconGroup variant="directions" label="Rotas" to="https://www.google.com/maps/dir//Dioni%20Mara%20Yoga%20&%20Terapias%20Tv.%20Pinheiro%20Machado,%20362%20-%20La%20Salle,%20Pato%20Branco%20-%20PR,%2085505-060" />
            </div>
        </header>
    </Container>
}

interface HeaderIconGroupProps {
    variant: "instagram" | "whatsapp" | "directions";
    to: string;
    label: string;
}

function HeaderIconGroup({ variant, to, label }: HeaderIconGroupProps) {

    return <div className="flex flex-col justify-content items-center gap-1 hover:bg-violet-100 rounded-md p-2">
        <Icon variant={variant} to={to} />
        <span className="text-xs font-bold text-sky-700">{label}</span>
    </div>

}