import type { SalePromoUI } from "~/types";
import Container from "../layout/container/container";
import WhatsappExternalLink from "../whatsapp-external-link/whatsapp-external-link";

interface SalePromosProps {
    list: SalePromoUI[];
}

export default function SalePromos({ list }: SalePromosProps) {

    if (!list || list.length === 0) return null;

    return <Container>
        <h2 className="font-extrabold text-2xl mb-4">Ofertas do momento</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {list.map((salePromo) => <SalePromoBox key={salePromo.id} imageUrl={salePromo.thumbnailImageURL} to={salePromo.infoMessage} title={salePromo.title} discount={salePromo.discount} />)}
        </div>
    </Container>
}


interface SalePromoBoxProps {
    imageUrl?: string;
    title?: string;
    discount?: number;
    to: string;
}

function SalePromoBox({ imageUrl, title, discount, to }: SalePromoBoxProps) {
    return <div className=" flex flex-col bg-violet-100 rounded-xl py-6 px-2 gap-6">
        <div>
            <img src={imageUrl} className="mb-6 rounded-md" alt={`Oferta do momento: desconto ${discount}% para ${title}`} />
            <h3 className="font-extrabold flex flex-col justify-center gap-0 mb-2">
                <span className="text-3xl leading-none"> {discount}%</span>
                <span className="text-xl leading-none">desconto</span>
            </h3>
            <h4 className="text-lg leading-tight uppercase">{title}</h4>
        </div>
        <WhatsappExternalLink ariaLabel="Saiba mais" message={"Olá"} style={"flex uppercase text-sm font-bold justify-center rounded-full bg-sky-200 py-1 px-4 md:px-8 shadow-md hover:bg-sky-600 hover:text-white transition-colors duration-300"}>Saiba mais</WhatsappExternalLink>
    </div>
}