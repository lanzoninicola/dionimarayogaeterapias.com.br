import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";

import { ButtonLink } from "~/client/components/primitives/button-link/button-link";
import salePromos from "../content/sale-promos.json"
import Container from "~/client/components/layout/container/container";


import type { SalePromoUI } from "~/types";

import WhatsappExternalLink from "~/client/components/whatsapp-external-link/whatsapp-external-link";
import SalePromos from "~/client/components/sale-promos/sale-promos";

export const handle = {
  lastModified: () => '2023-05-18T12:00:00Z',
}

export const meta: V2_MetaFunction = (serverRuntimeMetaArgs) => {
  // const loaderData: SalePromoUI[] = serverRuntimeMetaArgs?.data || []
  // const salePromosClaim: string = loaderData.filter(p => p.disabled === false).map(p => `${p.servicesPromo.join(" ou ")} com ${p.discount}% de desconto até ${new Date(p.dateEnd).toLocaleDateString('br-pt')}`).join(", ")

  return [
    { title: "Dioni Mara Yoga & Terapias" },
    { description: "Meu nome é Dioni Mara. Entendo a importância do autocuidado, do bem-estar. Yoga, Técnicas de Massagens e Terapias Holísticas são as minhas ferramentas para ajudá-lo a alcançar seus objetivos de saúde, tanto a curto quanto a longo prazo. Convido você a vivenciar uma experiência única, terapêutica e relaxante, venha e veja por si mesmo o valor que a massagem terapêutica e a pratíca do yoga tem em seu corpo, mente e espírito.", },
    { keywords: "yoga para crianças, yoga para gestantes, yoga para adulto, massagem modeladora, massagem relaxante, massagem com ventosas, drenagem linfática, massagem com pedras, bambuterapia, reiki, reiki para gestantes, reiki para crianças, meditação, kundalini, terapia holísticas, reflexoterapia, terapia floral, numerologia, calatonia, yoga online, yoga em grupo, yoga em escolas, yoga em academias" }
  ]
}

export function loader() {

  // TODO: Check the validation of the salePromos

  const dealsUI: SalePromoUI[] = salePromos.filter(d => d.disabled === false).map(t => {
    return {
      ...t,
      infoMessage: `Olá, gostaria de saber mais sobre a promoção ${t.title}. <Faça sua pergunta>`,
      bookingMessage: `Olá, gostaria de agendar em relação a promoção ${t.title}.`
    }
  })

  return json(dealsUI)
}

export default function Index() {
  const salePromos: SalePromoUI[] = useLoaderData();

  return <>
    <Container>
      <div className="flex flex-col gap-4 md:gap-8 mb-16">
        <ButtonLink label="Massagens" to="/massagens" />
        <ButtonLink label="Terapias Holísticas" to="/terapias-holisticas" />
        <ButtonLink label="Yoga" to="/yoga" />
        <WhatsappExternalLink ariaLabel="Agendar um hórario" message={"Olá, gostaria agendar um hóraria para <indicar o serviço>"} style={"flex text-white justify-center rounded-full bg-sky-700 py-5 px-8 font-semibold shadow-md hover:bg-sky-600 hover:text-white transition-colors duration-300"}>Agendar um hórario</WhatsappExternalLink>
        {/* <ButtonLink label="Tour da sala" to="#" />
        <ButtonLink label="Quem é Dioni Mara" to="#" /> */}
      </div>
    </Container>
    <SalePromos list={salePromos} />
  </>
}

function BackgroundHomeImage() {
  return <div className="absolute top-0 left-0 md:inset-0 bg-cover bg-left-bottom lg:bg-cover lg:bg-right-top bg-no-repeat opacity-80 -z-10" style={{ backgroundImage: "url('https://res.cloudinary.com/cloudnila/image/upload/v1682558715/dionimarayogaeterapias.com.br/home-bg.png')" }}></div>
}