import { DealUI } from "~/types";
import Container from "../layout/container/container";
import WhatsappExternalLink from "../whatsapp-external-link/whatsapp-external-link";

interface DealsProps {
    deals: DealUI[];
}

export default function Deals({ deals }: DealsProps) {

    if (!deals || deals.length === 0) return null;

    return <Container>
        <h2 className="font-extrabold text-2xl mb-4">Ofertas do momento</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {deals.map((deal) => <DealBox key={deal.id} imageUrl={deal.thumbnailImageURL} to={deal.infoMessage} title={deal.title} discount={deal.discount} />)}
        </div>
    </Container>
}


interface DealBoxProps {
    imageUrl?: string;
    title?: string;
    discount?: number;
    to: string;
}

function DealBox({ imageUrl, title, discount, to }: DealBoxProps) {
    return <div className=" flex flex-col bg-violet-200 rounded-xl py-6 px-4 gap-4">
        <div>
            <img src={imageUrl} className="mb-6 rounded-md" alt={`Oferta do momento: desconto ${discount}% para ${title}`} />
            <h3 className="font-extrabold flex flex-col justify-center gap-0 mb-2">
                <span className="text-3xl leading-none"> {discount}%</span>
                <span className="text-xl leading-none">desconto</span>
            </h3>
            <h4 className="text-lg leading-tight uppercase">{title}</h4>
        </div>
        <WhatsappExternalLink ariaLabel="Saiba mais" message={"Olá"} style={"flex text-white justify-center rounded-full bg-sky-700 py-2 px-4 md:px-8 shadow-md hover:bg-sky-600 hover:text-white transition-colors duration-300"}>Saiba mais</WhatsappExternalLink>
    </div>
}