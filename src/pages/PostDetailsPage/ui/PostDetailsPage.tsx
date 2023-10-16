import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page";
import { PostDetails } from "@/entities/Post";

interface PostDetailsPageProps {
  className?: string;
}

const PostDetailsPage = ({ className }: PostDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Page className={className}>
      <PostDetails id={id} />
    </Page>
  );
};

export default PostDetailsPage;
