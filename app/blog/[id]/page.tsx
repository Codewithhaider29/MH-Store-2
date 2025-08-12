import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime?: string;
  content?: string;
  category?: string;
  featured?: boolean;
};

interface Props {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  // Await params before destructuring
  const awaitedParams = await params;
  const { id } = awaitedParams;

  // Find the matching post (convert id to string for safe compare)
  const post: BlogPost | undefined = blogPosts.find((p) => String(p.id) === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-bold mb-4 font-playfair">{post.title}</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <span>{post.date}</span>
        {post.readTime && (
          <>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </>
        )}
      </div>

      <Image
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-lg object-cover w-full h-auto"
        priority
      />

      <div className="mt-6 prose prose-pink max-w-none">
        {post.content ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <p className="text-lg">{post.excerpt}</p>
        )}
      </div>

      {post.author && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600">Written by {post.author}</p>
        </div>
      )}
    </div>
  );
}
