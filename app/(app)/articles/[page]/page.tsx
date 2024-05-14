import config from "@payload-config"
import {getPayload} from "payload";
import Link from "next/link";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination"
import {toast} from "react-toastify";
import isActive = toast.isActive;

const Articles = async ({params}: {params: { page: number}}) => {
    const payload = await getPayload({config})
    const articles = await payload.find({
        collection: 'articles',
        limit: 5,
        page: params.page,
    })

    const paginationItems = [];
    for (let i = 1; i <= articles.totalPages; i++) {
        paginationItems.push(
            <PaginationItem>
                <PaginationLink href={`/articles/${i}`} isActive={params.page == i}>{i}</PaginationLink>
            </PaginationItem>
        )
    }

    return (
        <div className="max-w-5xl mx-auto">
            {articles.docs.map( item => (
                <div key={item.id}>
                    <Link className="rounded-md border-2 p-5 block mb-3" href={`/article/${item.slug}`}>{item.title}</Link>
                </div>
            ))}

            <Pagination className="py-8">
                <PaginationContent>
                    {paginationItems}
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default Articles;