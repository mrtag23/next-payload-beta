import config from "@payload-config"
import {getPayload} from "payload";
import Hero from "@/components/Hero";
import Accordion from "@/components/Accordion";
import {type LandingPage} from "@/payload-types";

const LandingPage = async ({params}: {params: { slug: string}}) => {
    const payload = await getPayload({config})
    const landingPageData = await payload.find({
        collection: 'landing-pages',
        where: {
            slug: { equals: params.slug },
        },
        limit: 1
    })

    return (
        <>
            {landingPageData.docs.length && landingPageData.docs.map((page: LandingPage) => (
               <div key={page.id}>
                   <div className="max-w-5xl mx-auto">
                       <h1 className="font-bold text-5xl pb-10">{page.title}</h1>
                   </div>
                   {page?.components && page.components.map(component => {
                       switch (component.blockType) {
                           case 'accordion':
                               return <Accordion
                                   key={component.id}
                                   title={component.title}
                                   body={component.body}
                                   type={component.type}
                                   items={component.items}
                               />
                           case 'hero':
                               return <Hero
                                   key={component.id}
                                   heroImage={component.heroImage}
                                   heroTitle={component.heroTitle}
                                   heroSubtitle={component.heroSubtitle}
                                   heroBody={component.heroBody}
                               />
                       }
                   })}
               </div>
            ))}
        </>
    )
}

export default LandingPage;