import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Container from "~/client/components/layout/container/container";
import therapies from "../content/terapias.json"
import ServiceBox from "~/client/components/service-box/service-box";
import type { Handle, ServiceUI } from "~/types";

export const handle: Handle = {
    lastModified: () => '2023-05-18T12:00:00Z',
}

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Terapias Holísticas - Dioni Mara Yoga & Terapias" },
        { description: "Descubra como a terapia holística pode ajudar a equilibrar seu corpo, mente e espírito. Oferecemos tratamentos de Reiki e Reflexoterapia para reduzir o estresse, aliviar dores e promover o bem-estar integral. Agende sua terapia agora!" },
        { keywords: "yoga, terapias, massagem, reiki, meditação, yoga em casa, yoga online, yoga em grupo, yoga em empresas, yoga em escolas, yoga em academias, yoga em condomínios, yoga" }
    ]
}


export function loader() {

    const therapiesUI = therapies.map(t => {
        return {
            ...t,
            infoMessage: `Olá, gostaria de saber mais sobre a terapia ${t.name}. <Faça sua pergunta>`,
            bookingMessage: `Olá, gostaria de agendar uma terapia ${t.name}.`
        }
    })

    return json(therapiesUI)
}


// TODO: implement a sort order to spotlight some services
// TODO: add an explanation of preparation and aftercare
export default function ServicosTerapiasHolisticas() {
    const therapies: ServiceUI[] = useLoaderData();

    return <>
        <Container>
            <h1 className="font-bold text-4xl mb-8">Terapias Holísticas</h1>
            <p className="md:text-xl  leading-normal">A terapia holística aborda a pessoa como um todo, considerando não apenas os sintomas físicos, mas também as emoções, a mente e o espírito. Ela busca equilibrar e harmonizar esses aspectos para promover a saúde e o bem-estar de forma integral.</p>
        </Container>
        <Container>
            <div className="flex flex-col gap-4 lg:gap-8 mt-8">
                {therapies.map((therapy) => {
                    return <ServiceBox
                        key={therapy.id}
                        name={therapy.name}
                        imageUrl={therapy.imageUrl}
                        shortDescription={therapy.shortDescription}
                        infoMessage={therapy.infoMessage}
                        bookingMessage={therapy.bookingMessage}
                    />
                })}

            </div>

        </Container>
    </>
}
