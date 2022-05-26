import React from "react"


export default function PostPreview({ post }) {
  return (
    <section className="post-preview flex-col">
      <section className="post-header flex-spaced">
        <div className="post-user-info flex">
            <input type="image" src={post.by.imgUrl} alt="Profile image" />
            <h4 className="post-user-name">{post.by.fullname}</h4>
        </div>
        <input type="image" src={require('../assets/imgs/dots-menu.png')} alt="Post control menu" />
      </section>

      <input className="post-image" type="image" src={post.imgUrl} alt="Post image" />

      <section className="post-controls flex-spaced">
        <div className="post-btns">
          <input type="image" src={require('../assets/imgs/heart.png')} alt="Like" />
          <input type="image" src={require('../assets/imgs/message-bubble.png')} alt="Message" />
        </div>
        <input type="image" src={require('../assets/imgs/bookmark.png')} alt="Save to collection" />
      </section>

      <div className="post-likes">{post.likedBy.length} likes</div>

      <div className="post-content">
          <p className="post-desc">{post.txt}</p>
          <p className="comments-btn">View all {post.comments.length} comments</p>
      </div>

      <div className="post-time"></div>

      <input type="text" name="" placeholder="Add a comment" id="" />
    </section>
  )
}
