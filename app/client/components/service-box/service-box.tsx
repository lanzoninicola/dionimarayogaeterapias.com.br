import WhatsappExternalLink from "../whatsapp-external-link/whatsapp-external-link";


interface ServiceBoxProps {
    imageUrl?: string;
    name: string;
    shortDescription: string;
    duration?: number | number[];
    infoMessage?: string;
    bookingMessage?: string;
}

export default function ServiceBox({ imageUrl, name, shortDescription, infoMessage, bookingMessage }: ServiceBoxProps) {
    return <div className="bg-violet-200 rounded-xl py-6 px-4">
        <div className="flex flex-col md:flex-row md:gap-4">
            {imageUrl && <div className="h-52 md:h-64 md:min-w-[10rem] bg-cover bg-center mb-4 rounded-md" style={{ backgroundImage: `url(${imageUrl})` }}></div>}
            <div>
                <div className="mb-8">
                    <h2 className="text-xl font-bold leading-relaxed font-title">{name}</h2>
                    <p className="text-lg leading-normal font-body font-normal">{shortDescription}</p>
                </div>
                <div className="flex  justify-end items-center">
                    {/* {infoMessage && <WhatsappExternalLink ariaLabel="Saiba mais" message={infoMessage} style="border-4 border-sky-500 rounded-full py-4 px-6 font-bold md:mr-4 text-sky-500">Saiba mais</WhatsappExternalLink>} */}
                    {bookingMessage && <WhatsappExternalLink ariaLabel="Agendar" message={bookingMessage} style="border-4 border-sky-500 bg-sky-200 rounded-full py-4 px-8 font-bold hover:bg-sky-100">Agendar</WhatsappExternalLink>}
                </div>
            </div>
        </div>

    </div>
}