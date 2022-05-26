import PostPreview from "./post-preview"

export default function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostPreview key={post._id} post={post} />
      ))}
    </div>
  )
}
