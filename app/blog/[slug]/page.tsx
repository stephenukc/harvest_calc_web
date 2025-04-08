import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { Heading, Subheading } from "@/components/text";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";
import type { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const response = await fetch(
    `${process.env.API_BASE_URL}/blog/pages/?${new URLSearchParams({
      type: "blog.BlogPage",
      slug: params.slug,
      fields: ["date", "body", "tags", "intro"].join(","),
    })}`
  );
  const post: BlogItems = await response.json();

  return { title: post.items[0].title, description: post.items[0].intro };
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const response = await fetch(
    `${process.env.API_BASE_URL}/blog/pages/?${new URLSearchParams({
      type: "blog.BlogPage",
      slug: params.slug,
      fields: ["date", "body", "tags", "intro"].join(","),
    })}`
  );
  const post: BlogItems = await response.json();
  return (
    <Container>
      <Subheading className="mt-16">
        {dayjs(post.items[0].date).format("dddd, MMMM D, YYYY")}
      </Subheading>
      <Heading as="h1" className="mt-2">
        {post.items[0].title}
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
        <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
          {Array.isArray(post.items[0].tags) && (
            <div className="flex flex-wrap gap-2">
              {post.items[0].tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tags=${tag}`}
                  className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="text-gray-700">
          <div className="max-w-2xl xl:mx-auto">
            {/* {post.mainImage && (
              <img
                alt={post.mainImage.alt || ""}
                src={image(post.mainImage).size(2016, 1344).url()}
                className="mb-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
              />
            )} */}
            <article
              className="prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: post.items[0].body }}
            ></article>
            <div className="mt-10">
              <Button href="/blog" outline>
                <ChevronLeftIcon className="size-4" />
                Back to blog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
