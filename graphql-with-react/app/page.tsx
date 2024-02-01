"use client"; // This should be at the top
// Be default everything in next is server side
// This is client side
import Image from 'next/image'
import {Post} from "@/src/types"
import getAllPosts from "@/src/utils/requests"
import { useEffect,useState } from "react";
export default function Home(){
  const [posts,setPosts] = useState<Post[]>([])
  async function fetchPosts(){
    const postFetched = await getAllPosts();
    setPosts(postFetched);
  }
  useEffect(()=>{fetchPosts();},[]);
    return (
    <main className="max-w-7xl w-full mx-auto">
      <div className="title-container">
        <h1 className="title">Posts</h1>
        <hr className="horizontal-line"></hr>
      </div>
      {posts.map((post)=>(
        <div key={post.id} className="my-5 text-lg post-styling">{post.title}</div>
      ))}
      <style jsx>{`
       .title-container{
        text-align:center;
        margin:2rem;
       }
       .title{
        font-size:2rem;
       }
       .horizontal-line{
        width:50%;
        border:1px solid #333;
        margin:0 auto;
        margin-top:0.5rem;
       }
       .post-styling{
          margin:1rem;
          color:white;
          transition:color 0.5s ease;
        }
        .post-styling:hover{
          color: red;
          curson:pointer;
        }
      `}
      </style>
    </main>
  )
}
// This is server side fetching 
// export default async function Home() {
//   const posts=await getAllPosts();
//   return (
//     <main className="max-w-7xl w-full mx-auto">
//       {posts.map((post)=>(
//         <div key={post.id} className="my-5 text-lg">{post.title}</div>
//       ))}
//     </main>
//   )
// }