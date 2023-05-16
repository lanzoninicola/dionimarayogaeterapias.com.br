import Container from "~/client/components/layout/container/container";
import massages from "../content/massages.json"
import ServiceBox from "~/client/components/service-box/service-box";
import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Handle, ServiceUI } from "~/types";

export const handle: Handle = {
  lastModified: () => '2023-05-16T12:00:00Z',
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Dioni Mara Yoga & Terapias" },
    { description: "Encontre alívio para o estresse e a dor crônica com as terapias manuais personalizadas de Dioni Mara Yoga e Terapias. Experimente a massagem modeladora, drenagem linfatíca, relaxante ou com ventosas e agende agora mesmo." },
    { keywords: "yoga, terapias, massagem, reiki, meditação, yoga em casa, yoga online, yoga em grupo, yoga em empresas, yoga em escolas, yoga em academias, yoga em condomínios, yoga" }
  ]
}

export function loader() {

  const massagesUI = massages.map(t => {
    return {
      ...t,
      infoMessage: `Olá, gostaria de saber mais sobre a terapia ${t.name}. <Faça sua pergunta>`,
      bookingMessage: `Olá, gostaria de agendar uma terapia ${t.name}.`
    }
  })

  return json(massagesUI)
}


// TODO: implement a sort order to spotlight some services
// TODO: add an explanation of preparation and aftercare
export default function ServicosMassagens() {
  const massages: ServiceUI[] = useLoaderData();

  return <>
    <Container>
      <h1 className="font-bold text-4xl mb-8">Massagens</h1>
      <p className="md:text-xl leading-normal">As terapias manuais aplicadas são personalizadas para ajudar a administrar o estresse e a dor crônica. Descubra como posso ajudar a relaxar seu corpo e sua mente.</p>
    </Container>
    <Container>
      <div className="flex flex-col gap-4 lg:gap-8 mt-8">
        {massages.map((massage) => {

          return <ServiceBox
            key={massage.id}
            name={massage.name}
            imageUrl={massage.imageUrl}
            shortDescription={massage.shortDescription}
            infoMessage={massage.infoMessage}
            bookingMessage={massage.bookingMessage}
          />
        })}

      </div>

    </Container>
  </>
}
