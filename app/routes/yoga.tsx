import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Container from "~/client/components/layout/container/container";
import yoga from "../content/yoga.json"
import ServiceBox from "~/client/components/service-box/service-box";
import type { ServiceUI } from "~/types";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Dioni Mara Yoga & Terapias" },
        { description: "Dioni Mara Yoga & Terapias oferece práticas de yoga, terapias, massagem, reiki e meditação para empresas, escolas, academias. Melhore sua flexibilidade, força, equilíbrio e concentração para uma vida saudável e equilibrada. Agende agora pelo WhatsApp." },
        { keywords: "yoga, terapias, massagem, reiki, meditação, yoga em casa, yoga online, yoga em grupo, yoga em empresas, yoga em escolas, yoga em academias, yoga em condomínios, yoga" }
    ]
}


export function loader() {

    const yogaUI = yoga.map(t => {
        return {
            ...t,
            infoMessage: `Olá, gostaria de saber mais sobre yoga ${t.name}. <Faça sua pergunta>`,
            bookingMessage: `Olá, gostaria de agendar yoga ${t.name}.`
        }
    })

    return json(yogaUI)
}


// TODO: implement a sort order to spotlight some services
// TODO: add an explanation of preparation and aftercare
export default function ServicosYoga() {
    const yoga: ServiceUI[] = useLoaderData();

    return <>
        <Container>
            <h1 className="font-bold text-4xl mb-8">Yoga</h1>
            <p className="md:text-xl leading-normal">Ofereço a prática de yoga para promover o bem-estar físico e mental, por meio da melhoria da flexibilidade, força, equilíbrio e concentração. Buscamos desenvolver a consciência corporal e emocional, visando uma vida mais saudável e equilibrada.</p>
        </Container>
        <Container>
            <div className="flex flex-col gap-4 lg:gap-8 mt-8">
                {yoga.map((y) => {
                    return <ServiceBox
                        key={y.id}
                        name={y.name}
                        imageUrl={y.imageUrl}
                        shortDescription={y.shortDescription}
                        infoMessage={y.infoMessage}
                        bookingMessage={y.bookingMessage}
                    />
                })}

            </div>

        </Container>
    </>
}
