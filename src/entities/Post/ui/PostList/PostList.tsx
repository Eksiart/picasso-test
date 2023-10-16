import { useGetPostsQuery } from "@/entities/Post";
import { useState } from "react";
import { Virtuoso } from "react-virtuoso";
import { PostListItem } from "@/entities/Post/ui/PostListItem/PostListItem.tsx";
import { useNavigate } from "react-router-dom";

export const PostList = () => {
	const navigate = useNavigate();
	const [page, setPage] = useState(1);
	const { data, error, isLoading } = useGetPostsQuery({ limit: 10, page });
	const { posts, totalCount } = { ...data };

	if (error) {
		return <div>ERROR WHEN LOADING POSTS</div>
	}

	if (!isLoading && !posts?.length) {
		return (
			<div>
				POSTS NOT FOUND
			</div>
		)
	}
	const fetchNextPosts = () => {
		if (!isLoading && (posts?.length || 0) < (totalCount || 0)) {
			setPage(prev => prev + 1);
		}
	};

	return (
		<>
			<Virtuoso
				useWindowScroll
				data={posts}
				totalCount={totalCount}
				endReached={fetchNextPosts}
				itemContent={(_, post) => <PostListItem navigate={navigate} post={post}/>}
			/>
			{isLoading
				? <div>Loading...</div>
				: null
			}
		</>
	)
}