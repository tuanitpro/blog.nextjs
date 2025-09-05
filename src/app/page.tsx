import Image from "next/image";

export default async function Home() {
  const data = await fetch(
    "https://blog.tuanitpro.com/wp-json/wp/v2/posts?_embed"
  );
  const posts = await data.json();

  return (
    <>
      <header className="page-title">
        <article className="hentry">
          <div className="entry-content">
            <h1>code, eat, sleep, repeat</h1>
          </div>
        </article>
      </header>
      <article className="hentry">
        <div className="entry-content">
          <ul>
            {posts.map(
              (post: {
                id: string;
                _embedded: any;
                title: { rendered: string };
                link: string;
                excerpt: { rendered: string };
              }) => (
                <li key={post.id}>
                  {post?._embedded["wp:featuredmedia"][0]?.source_url && (
                    <div className="my-thumbnail">
                      <Image
                        width={150}
                        height={150}
                        src={post?._embedded["wp:featuredmedia"][0]?.source_url}
                        alt={post.title?.rendered}
                      />
                    </div>
                  )}
                  <a href={post?.link}>{post.title?.rendered}</a>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: post?.excerpt?.rendered,
                    }}
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </article>
    </>
  );
}
