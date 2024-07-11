import PostList from "@/components/posts/PostList"
import { fetchPostsBySearchTerm } from "@/db/queries/posts"
import { redirect } from "next/navigation"

interface SearchPageProps {
    searchParams: {
        term: string
    }
}

const SearchPage = ({searchParams}: SearchPageProps) => {
    const {term} = searchParams

    if (!term) {
        redirect('/')
    }

    return (
        <div>
            <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
        </div>
    );
}

export default SearchPage;