import config from "@payload-config"
import {getPayload} from "payload";

const Article = async ({params}: {params: { slug: string}}) => {
    const payload = await getPayload({config})
    const articles = await payload.find({
        collection: 'articles',
        where: {
            slug: { equals: params.slug },
        },
        limit: 1
    })

    return (
        <>
            {articles.docs.length && articles.docs.map(article => (
                <div key={article.id} className="max-w-5xl mx-auto">
                    <h1 className="font-bold text-5xl">{article.title}</h1>
                    {article.body_html && (
                        <div className="py-10" dangerouslySetInnerHTML={{__html: article.body_html}}/>
                    )}
                </div>
            ))}
        </>
    )
}

export default Article;