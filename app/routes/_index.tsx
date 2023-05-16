import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";

import { ButtonLink } from "~/client/components/primitives/button-link/button-link";
import deals from "../content/deals.json"
import Container from "~/client/components/layout/container/container";

import Deals from "~/client/components/deals/deals";
import type { DealUI } from "~/types";

import WhatsappExternalLink from "~/client/components/whatsapp-external-link/whatsapp-external-link";

export const handle = {
  lastModified: () => '2023-05-16T12:00:00Z',
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Dioni Mara Yoga & Terapias" },
    { description: "Dioni Mara Yoga & Terapias" },
    { keywords: "yoga, terapias, massagem, reiki, meditação, yoga em casa, yoga online, yoga em grupo, yoga em empresas, yoga em escolas, yoga em academias, yoga em condomínios, yoga" }
  ]
}

export function loader() {

  // TODO: Check the validation of the deals

  const dealsUI: DealUI[] = deals.filter(d => d.disabled === false).map(t => {
    return {
      ...t,
      infoMessage: `Olá, gostaria de saber mais sobre a promoção ${t.title}. <Faça sua pergunta>`,
      bookingMessage: `Olá, gostaria de agendar em relação a promoção ${t.title}.`
    }
  })

  return json(dealsUI)
}

export default function Index() {
  const deals: DealUI[] = useLoaderData();

  return <>
    <Container>
      <div className="flex flex-col gap-4 md:gap-8 mb-16">
        <WhatsappExternalLink ariaLabel="Agendar um hórario" message={"Olá, gostaria agendar um hóraria para <indicar o serviço>"} style={"flex text-white justify-center rounded-full bg-sky-700 py-5 px-8 font-semibold shadow-md hover:bg-sky-600 hover:text-white transition-colors duration-300"}>Agendar um hórario</WhatsappExternalLink>
        <ButtonLink label="Massagens" to="/massagens" />
        <ButtonLink label="Terapias Holísticas" to="/terapias-holisticas" />
        <ButtonLink label="Yoga" to="/yoga" />
        {/* <ButtonLink label="Tour da sala" to="#" />
        <ButtonLink label="Quem é Dioni Mara" to="#" /> */}
      </div>
    </Container>
    <Deals deals={deals} />
  </>
}

function BackgroundHomeImage() {
  return <div className="absolute top-0 left-0 md:inset-0 bg-cover bg-left-bottom lg:bg-cover lg:bg-right-top bg-no-repeat opacity-80 -z-10" style={{ backgroundImage: "url('https://res.cloudinary.com/cloudnila/image/upload/v1682558715/dionimarayogaeterapias.com.br/home-bg.png')" }}></div>
}