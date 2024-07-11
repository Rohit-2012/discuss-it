import Link from "next/link";
import paths from "@/paths";
import PostShow from "@/components/posts/PostShow";
import CommentCreateForm from "@/components/comments/CommentCreateForm";
import CommentList from "@/components/comments/CommentList";
import { fetchCommentsByPostId } from "@/db/queries/comments";

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
        <PostShow postId={postId} />
        <CommentCreateForm postId={postId} startOpen />
        <CommentList postId={postId} />
        </div>
    );
}

export default PostShowPage;