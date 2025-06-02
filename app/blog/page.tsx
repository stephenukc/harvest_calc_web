import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/dropdown";
import { Link } from "@/components/link";
import { Heading, Lead, Subheading } from "@/components/text";
import placeholder from "@/public/images/placeholder.jpg";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Blog",
  description:
    "Stay informed with product updates, company news, and insights on how to improve your agricultural practices.",
};

const postsPerPage = 20;

async function Posts({ page, tag }: { page: number; tag?: string }) {
  let response;
  if (page > 1) {
    if (!tag) {
      response = await fetch(
        `${process.env.API_BASE_URL}/blog/pages/?${new URLSearchParams({
          type: "blog.BlogPage",
          fields: ["date", "tags", "intro"].join(","),
          offset: `${(page - 1) * 20}`,
        })}`
      );
    } else {
      response = await fetch(
        `${process.env.API_BASE_URL}/blog/pages/?${new URLSearchParams({
          type: "blog.BlogPage",
          fields: ["date", "tags", "intro"].join(","),
          tags: tag,
          offset: `${(page - 1) * 20}`,
        })}`
      );
    }
  } else {
    if (!tag) {
      response = await fetch(
        `${process.env.API_BASE_URL}/blog/pages/?${new URLSearchParams({
          type: "blog.BlogPage",
          fields: ["date", "tags", "intro"].join(","),
        })}`
      );
    } else {
      response = await fetch(
        `${process.env.API_BASE_URL}/blog/pages/?${new URLSearchParams({
          type: "blog.BlogPage",
          fields: ["date", "tags", "intro"].join(","),
          tags: tag,
        })}`
      );
    }
  }
  const posts: BlogItems = await response.json();

  if (posts.items.length === 0 && (page > 1 || tag)) {
    notFound();
  }

  if (posts.items.length === 0) {
    return <p className="mt-6 text-gray-500">No Posts found.</p>;
  }

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {posts.items.map((post) => (
          <div
            key={post.meta.slug}
            className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
          >
            <Image
              alt="Post Image"
              src={placeholder}
              className="aspect-3/2 w-full rounded-2xl object-cover"
            />
            <div className="flex flex-1 flex-col p-8">
              <div className="text-sm/5 text-gray-700">
                {dayjs(post.date).format("dddd, MMMM D, YYYY")}
              </div>
              <div className="mt-2 text-base/7 font-medium">
                <Link href={`/blog/${post.meta.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </div>
              <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                {post.intro}
              </div>
              <div className="mt-6 flex items-center gap-3">
                {post.tags.map((tag) => (
                  <Badge key={tag} color="zinc">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

async function Tags({ selected }: { selected?: string }) {
  const response = await fetch(`${process.env.API_BASE_URL}/blog/tags/`);
  const tags: Tags = await response.json();
  return (
    <Dropdown>
      <DropdownButton className="mt-12" outline>
        {tags.tags.find((tag) => tag === selected) || "All Tags"}
        <ChevronUpDownIcon className="size-4 fill-gray-900" />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="/blog">
          {selected === undefined ? <CheckIcon /> : null}
          <DropdownLabel>All Tags</DropdownLabel>
        </DropdownItem>
        {tags.tags.map((tag) => (
          <DropdownItem key={tag} href={`/blog/?tags=${tag}`}>
            {tag === selected ? <CheckIcon /> : null}
            <DropdownLabel>{tag}</DropdownLabel>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

async function Pagination({ page, tag }: { page: number; tag?: string }) {
  function url(page: number) {
    let params = new URLSearchParams();

    if (tag) params.set("tags", tag);
    if (page > 1) params.set("page", page.toString());

    return params.size !== 0 ? `/blog/?${params.toString()}` : "/blog";
  }

  let response;
  if (!tag) {
    response = await fetch(
      `${process.env.API_BASE_URL}/blog/pages/?${new URLSearchParams({
        type: "blog.BlogPage",
        fields: ["date", "tags", "intro"].join(","),
      })}`
    );
  } else {
    response = await fetch(
      `${process.env.API_BASE_URL}/blog/pages/?${new URLSearchParams({
        type: "blog.BlogPage",
        fields: ["date", "tags", "intro"].join(","),
        tags: tag,
      })}`
    );
  }
  const posts: BlogItems = await response.json();
  const totalPosts = posts.meta.total_count;
  let hasPreviousPage = page - 1;
  let previousPageUrl = hasPreviousPage ? url(page - 1) : "";
  let hasNextPage = page * postsPerPage < totalPosts;
  let nextPageUrl = hasNextPage ? url(page + 1) : "";
  let pageCount = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button href={previousPageUrl} disabled={!previousPageUrl} outline>
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              "size-7 rounded-lg text-center text-sm/7 font-medium",
              "data-hover:bg-gray-100",
              "data-active:ring-1 data-active:shadow-sm data-active:ring-black/10",
              "data-active:data-hover:bg-gray-50"
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button href={nextPageUrl} disabled={!nextPageUrl} outline>
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}

export default async function BlogPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  let page =
    "page" in searchParams
      ? typeof searchParams.page === "string" && parseInt(searchParams.page) > 1
        ? parseInt(searchParams.page)
        : notFound()
      : 1;
  let selectedTag =
    typeof searchParams.tags === "string" ? searchParams.tags : undefined;

  return (
    <>
      <Subheading className="mt-16">Blog</Subheading>
      <Heading as="h1" className="mt-2">
        Seeds of Insight and Learning
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Stories, strategies, and innovations transforming African agriculture —
        one field at a time.
      </Lead>
      <Tags selected={selectedTag} />
      <Posts page={page} tag={selectedTag} />
      <Pagination page={page} tag={selectedTag} />
    </>
  );
}
