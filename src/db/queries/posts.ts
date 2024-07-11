import type {Post} from '@prisma/client'
import { db } from '..';

export type PostWithData = (
    Post & {
        topic: { slug: string };
        user: { name: string | null };
        _count: {comments: number}
    }
)

// export type PostWithData = Awaited<ReturnType<typeof fetchPostsByTopicSlug>>[number]

export function fetchPostsByTopicSlug(slug: string): Promise<PostWithData[]>{
    return db.post.findMany({
        where: { topic: { slug: slug } },
        include: {
            topic: {select: {slug: true}},
            user: {select: {name: true}},
            _count: {select: {comments: true}},
        }
    })
}