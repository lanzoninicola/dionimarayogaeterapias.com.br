import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Container from "~/client/components/layout/container/container";
import yoga from "../content/yoga.json"
import ServiceBox from "~/client/components/service-box/service-box";
import type { Handle, ServiceUI } from "~/types";

export const handle: Handle = {
    lastModified: () => '2023-05-23T12:00:00Z',
}

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Aulas de Yoga em Pato Branco - Dioni Mara Yoga & Terapias" },
        { description: "Dioni Mara Yoga & Terapias oferece aulas de Yoga em Pato Branco para todos os níveis e idades, além de terapias, massagens, reiki e meditação para empresas, escolas, academias. Melhore sua flexibilidade, força, equilíbrio e concentração para uma vida saudável e equilibrada. Agende agora pelo WhatsApp." },
        { keywords: "aulas de yoga, aulas de ioga, yoga para crianças, yoga para gestantes, yoga para adulto, meditação, kundalini, yoga online, yoga em grupo, yoga em escolas, yoga em academias" }
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
            <h1 className="font-bold text-3xl md:text-4xl mb-2">Yoga</h1>
            <h2 className="font-bold text-lg leading-snug md:text-xl mb-8">Aulas de yoga em Pato Branco para todos os níveis e idades</h2>
            <div>
                <p className="md:text-xl leading-normal mb-4">Ofereço uma variedade de estilos de yoga para atender às suas necessidades individuais.</p>
                <p className="md:text-xl leading-normal mb-4">Eu tenho opções para todos os níveis de experiência. Com cada tipo de yoga, meu objetivo é promover o bem-estar físico e mental, através da melhoria da flexibilidade, força, equilíbrio e concentração.</p>
                <p className="md:text-xl leading-normal mb-4">Além disso, eu sou uma instrutora altamente qualificada e estou comprometida em ajudar a desenvolver sua consciência corporal e emocional, visando uma vida mais saudável e equilibrada.</p>
            </div>
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
