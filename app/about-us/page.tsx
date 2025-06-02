import { getUser } from "@/app/lib/dal";
import { AnimatedNumber } from "@/components/animated-number";
import { Container } from "@/components/container";
import MainLayout from "@/components/layout/main-layout";
import { Heading, Lead, Subheading } from "@/components/text";
import about1 from "@/public/images/about-1.jpg";
import about2 from "@/public/images/about-2.jpg";
import about3 from "@/public/images/about-3.jpg";
import about4 from "@/public/images/about-4.jpg";
import placeholder from "@/public/images/placeholder.jpg";
import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";

export const metadata: Metadata = {
  title: "About Us - HarvestCalc",
  description:
    "We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.",
};

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">
        Reimagining Agriculture, Empowering Generations.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        HarvestCalc is building a smarter, fairer, and more connected
        agricultural future—one farmer, one field, one innovation at a time.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            At HarvestCalc, we are building more than a platform—we are building
            a movement to transform African agriculture from the roots up. Born
            from lived experience and driven by innovation, HarvestCalc is an
            agricultural technology company dedicated to restoring dignity to
            farming, unlocking value in food systems, and ensuring that no
            harvest goes to waste.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            We combine technology and community to bridge the gap between
            smallholder farmers and high-value markets.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src={about1}
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <Image
                alt=""
                src={about2}
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src={about3}
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <Image
                alt=""
                src={about4}
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>The Numbers</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">
                Farmers Targeted across Nigeria
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={50} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">
                Trained local agents and agricultural representatives
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={100} end={774} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">
                Average increase in income for participating farmers
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={35} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">
                Tonnes of produce projected to be saved from post-harvest loss
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={100} />K
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  );
}

function Person({
  name,
  description,
  img,
}: {
  name: string;
  description: string;
  img: StaticImageData;
}) {
  return (
    <li className="flex items-center gap-4">
      <Image alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  );
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>What We Do</Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our Vision</h2>
          <p className="mt-4 text-sm/6 text-gray-600">
            To build Africa&apos;s most inclusive, intelligent, and efficient
            agricultural ecosystem —where every farmer is visible, every crop is
            valued, and every child is fed.
          </p>
          <h2 className="mt-8 text-2xl font-medium tracking-tight">
            Our Mission
          </h2>
          <p className="mt-4 text-sm/6 text-gray-600">
            To eliminate waste, increase yield, and open markets for African
            farmers using data, technology, and shared knowledge.
          </p>
          <h2 className="mt-8 text-2xl font-medium tracking-tight">
            Who We Serve
          </h2>
          <p className="mt-4 text-sm/6 text-gray-600">
            Farmers & Cooperatives seeking better yields and better markets.
          </p>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <Image
              alt=""
              src={placeholder}
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        The team
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Michael Foster"
          description="Co-Founder / CTO"
          img={placeholder}
        />
        <Person
          name="Dries Vincent"
          description="Business Relations"
          img={placeholder}
        />
        <Person
          name="Celeste Vandermark"
          description="Front-end Developer"
          img={placeholder}
        />
        <Person
          name="Courtney Henry"
          description="Designer"
          img={placeholder}
        />
        <Person
          name="Marcus Eldridge"
          description="Director of Product"
          img={placeholder}
        />
        <Person
          name="Whitney Francis"
          description="Copywriter"
          img={placeholder}
        />
        <Person
          name="Leonard Krasner"
          description="Senior Designer"
          img={placeholder}
        />
        <Person
          name="Nolan Sheffield"
          description="Principal Designer"
          img={placeholder}
        />
        <Person
          name="Emily Selman"
          description="VP, User Experience"
          img={placeholder}
        />
      </ul>
    </Container>
  );
}

export default async function CompanyPage() {
  const user: User | null = await getUser();
  return (
    <MainLayout user={user}>
      <Header />
      <Team />
    </MainLayout>
  );
}
