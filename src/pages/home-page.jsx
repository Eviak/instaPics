import React, { useState } from "react"
import PostList from "../cmps/post-list"
import { postService } from "../services/post.service"

export default function HomePage() {
  const [posts] = useState(postService.query())
  
  return (
    <div className="home-page">
      
      <PostList posts={posts} />
    </div>
  )
}
