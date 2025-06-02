import { getUser } from "@/app/lib/dal";
import { Badge } from "@/components/badge";
import { Heading, Subheading } from "@/components/heading";
import { Link } from "@/components/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import placeholder from "@/public/images/placeholder.jpg";
import dayjs from "dayjs";
import Image from "next/image";

const stats = [
  { name: "Farm Size", stat: "71 Hectares" },
  { name: "Total Produce this Season", stat: "58 Tonnes" },
  { name: "Estimated Income", stat: "$2,400" },
];

const posts = {
  items: [
    {
      meta: {
        slug: "sustainable-farming-practices-nigeria",
      },
      title: "Sustainable Farming Practices in Nigeria",
      date: "2025-05-20T10:00:00Z",
      intro:
        "Discover how smallholder farmers across Nigeria are adopting sustainable techniques to improve yield and conserve resources.",
      tags: ["Sustainability", "Farming", "Nigeria"],
    },
    {
      meta: {
        slug: "how-to-price-agricultural-products",
      },
      title: "How to Price Your Agricultural Products Effectively",
      date: "2025-05-15T09:00:00Z",
      intro:
        "Learn the key factors that affect pricing in local markets, and how to estimate the best value for your crops.",
      tags: ["Economics", "Market", "Pricing"],
    },
    {
      meta: {
        slug: "climate-impact-on-crop-yields",
      },
      title: "The Impact of Climate Change on Crop Yields",
      date: "2025-05-10T14:30:00Z",
      intro:
        "Explore the relationship between shifting climate patterns and agricultural productivity in West Africa.",
      tags: ["Climate", "Agriculture", "Research"],
    },
  ],
};

const producePriceEstimates = [
  {
    id: 1,
    name: "Maize",
    unit: "kg",
    price: 120,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 2,
    name: "Rice (paddy)",
    unit: "kg",
    price: 210,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 3,
    name: "Cassava",
    unit: "ton",
    price: 45000,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 4,
    name: "Yam (tuber)",
    unit: "kg",
    price: 180,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 5,
    name: "Tomatoes",
    unit: "kg",
    price: 350,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 6,
    name: "Onions",
    unit: "kg",
    price: 290,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 7,
    name: "Sorghum",
    unit: "kg",
    price: 140,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 8,
    name: "Palm Oil",
    unit: "liter",
    price: 1100,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 9,
    name: "Groundnuts",
    unit: "kg",
    price: 320,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 10,
    name: "Plantain",
    unit: "bunch",
    price: 800,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 11,
    name: "Millet",
    unit: "kg",
    price: 135,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 12,
    name: "Cocoa",
    unit: "kg",
    price: 1700,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 13,
    name: "Soybeans",
    unit: "kg",
    price: 300,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 14,
    name: "Pepper",
    unit: "kg",
    price: 400,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 15,
    name: "Cocoyam",
    unit: "kg",
    price: 160,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 16,
    name: "Banana",
    unit: "bunch",
    price: 700,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 17,
    name: "Sugarcane",
    unit: "stick",
    price: 100,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 18,
    name: "Okra",
    unit: "kg",
    price: 260,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 19,
    name: "Ginger",
    unit: "kg",
    price: 750,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
  {
    id: 20,
    name: "Garlic",
    unit: "kg",
    price: 850,
    currency: "NGN",
    lastUpdated: "2025-06-01T08:30:00Z",
  },
];

function CurrentPrices() {
  return (
    <div className="mt-16">
      <Subheading>Current Market Price Estimates</Subheading>
      <Table className="mt-8">
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Unit</TableHeader>
            <TableHeader>Currency</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Last Updated</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {producePriceEstimates.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>{item.currency}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell className="text-zinc-500">
                {dayjs(item.lastUpdated).format("dddd, MMMM D, YYYY")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function Stats() {
  return (
    <div className="mt-8">
      <Subheading>Your Farm Insights</Subheading>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function RecommendedPosts() {
  return (
    <div className="mt-16">
      <Subheading>Recommended Blog Posts</Subheading>
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
    </div>
  );
}

export default async function Home() {
  const user: User | null = await getUser();
  return (
    <>
      <Heading>Welcome, {user && user.first_name}</Heading>
      <Stats />
      <RecommendedPosts />
      <CurrentPrices />
    </>
  );
}
