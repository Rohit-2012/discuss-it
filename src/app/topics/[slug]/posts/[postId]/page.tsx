import Link from "next/link";
import paths from "@/paths";
import PostShow from "@/components/posts/PostShow";
import CommentCreateForm from "@/components/comments/CommentCreateForm";
import CommentList from "@/components/comments/CommentList";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import { Suspense } from "react";
import PostShowLoading from "@/components/posts/PostShowLoading";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}


const PostShowPage = ({params}: PostShowPageProps) => {
  const { slug, postId } = params
  
    return (
        <div className="space-y-3">
        <Link className="underline decoration-solid" href={paths.topicShow(slug)}>{'< '} Back to {slug}</Link>
        <Suspense fallback={<PostShowLoading />}><PostShow postId={postId} /></Suspense>
        <CommentCreateForm postId={postId} startOpen />
        <CommentList postId={postId} />
        </div>
    );
}

export default PostShowPage;