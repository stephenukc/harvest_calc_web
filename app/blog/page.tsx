import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Link } from "@/components/link";
import { Heading, Lead, Subheading } from "@/components/text";
import placeholder from "@/public/images/placeholder.jpg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import dayjs from "dayjs";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description:
    "Stay informed with product updates, company news, and insights on how to improve your agricultural practices.",
};

const postsPerPage = 5;

async function Articles() {
  const response = await fetch(
    `${process.env.API_BASE_URL}/blog/pages/?${new URLSearchParams({
      type: "blog.BlogPage",
      fields: ["date", "body", "tags", "intro"].join(","),
    })}`
  );
  const articles: BlogPagesResponse = await response.json();
  return (
    <div className="mt-16 pb-14">
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {articles.items.map((article) => (
          <div
            key={article.meta.slug}
            className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
          >
            <Image
              alt="Article Image"
              src={placeholder}
              className="aspect-3/2 w-full rounded-2xl object-cover"
            />
            <div className="flex flex-1 flex-col p-8">
              <div className="text-sm/5 text-gray-700">
                {dayjs(article.date).format("dddd, MMMM D, YYYY")}
              </div>
              <div className="mt-2 text-base/7 font-medium">
                <Link href={`/blog`}>
                  <span className="absolute inset-0" />
                  {article.title}
                </Link>
              </div>
              <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                {article.intro}
              </div>
              <div className="mt-6 flex items-center gap-3">
                {article.tags.map((tag) => (
                  <Badge key={tag} color="zinc">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function Categories({ selected }: { selected?: string }) {
  let categories = ["One", "Two"];

  if (categories.length === 0) {
    return;
  }

  return (
    <Menu>
      <MenuButton className="flex items-center justify-between gap-2 font-medium">
        All categories
        <ChevronUpDownIcon className="size-4 fill-gray-900" />
      </MenuButton>
      <MenuItems
        anchor="bottom start"
        className="min-w-40 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
      >
        <MenuItem>
          <Link
            href="/blog"
            data-selected={selected === undefined ? true : undefined}
            className="group grid grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
          >
            <CheckIcon className="hidden size-4 group-data-selected:block" />
            <p className="col-start-2 text-sm/6">All categories</p>
          </Link>
        </MenuItem>
        {categories.map((category) => (
          <MenuItem key={category}>
            <Link
              href={`/blog?category=${category}`}
              data-selected={category === selected ? true : undefined}
              className="group grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-selected:block" />
              <p className="col-start-2 text-sm/6">{category}</p>
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

function Pagination({ page, category }: { page: number; category?: string }) {
  function url(page: number) {
    let params = new URLSearchParams();

    if (category) params.set("category", category);
    if (page > 1) params.set("page", page.toString());

    return params.size !== 0 ? `/blog?${params.toString()}` : "/blog";
  }

  let totalPosts = 20;
  let hasPreviousPage = page - 1;
  let previousPageUrl = hasPreviousPage ? url(page - 1) : "";
  let hasNextPage = page * postsPerPage < totalPosts;
  let nextPageUrl = hasNextPage ? url(page + 1) : "";
  let pageCount = Math.ceil(totalPosts / postsPerPage);

  if (pageCount < 2) {
    return;
  }

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

export default function Blog() {
  return (
    <>
      <Subheading className="mt-16">Blog</Subheading>
      <Heading as="h1" className="mt-2">
        What&apos;s happening at HarvestCalc.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Stay informed with product updates, company news, and insights on how to
        improve your agricultural practices.
      </Lead>
      <Articles />
    </>
  );
}
