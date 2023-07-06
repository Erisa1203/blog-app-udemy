import React, { useEffect, useState } from 'react'
import "./Home.css"
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { auth, db } from '../firebase'

const Home = () => {
  const [postList, setPostList] = useState([])
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id))
    window.location.href = "/"
  }

  return (
    <div className='homePage'>
      {postList.map((post) => {
        // console.log(post)
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
              <h3>@{post.author && post.author.username}</h3>
            </div>
            <div className="postTextContainer">
              {post.postText}
            </div>
            {post.author.id === auth.currentUser?.uid && (
              <button className='btn--delete' onClick={() => handleDelete(post.id)}>削除</button>              
            )}
          </div>
        )
      }

      )}
    </div>
  )
}

export default Home
