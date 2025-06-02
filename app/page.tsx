import { getUser } from "@/app/lib/dal";
import MainLayout from "@/components/layout/main-layout";
import { Link } from "@/components/link";
import hero from "@/public/images/hero.jpg";
import {
  BanknotesIcon,
  MapPinIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home - HarvestCalc",
  description: "Powering the future of agriculture.",
};

const solutions = [
  {
    name: "Predictive Analytics",
    description: "Matching supply with demand ahead of harvest.",
    icon: PresentationChartLineIcon,
  },
  {
    name: "Geolocation Technology",
    description: "Mapping farm locations for smarter logistics.",
    icon: MapPinIcon,
  },
  {
    name: "Fair Pricing & Guaranteed Sales",
    description: "Eliminating uncertainty for farmers.",
    icon: BanknotesIcon,
  },
];

const features = [
  {
    name: "Efficiency",
    description: "A seamless, tech-powered supply chain.",
  },
  {
    name: "Profitability",
    description: "Higher farmer earnings and lower food wastage.",
  },
  {
    name: "Sustainability",
    description:
      "Reducing agricultural inefficiencies for global food security.",
  },
];

function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-black pt-14">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <Image
          src={hero}
          alt="Farmer and analyst"
          className="absolute inset-0 -z-10 size-full object-cover opacity-50"
        />
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-50 sm:text-7xl">
            Powering the Future of Agriculture
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-100 sm:text-xl/8">
            HarvestCalc is revolutionizing agriculture by connecting farmers
            with guaranteed buyers through data-driven technology. Our platform
            predicts harvest yields, optimizes supply chains, and ensures fair
            pricing—reducing food waste and increasing farmer profitability.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/auth/signin"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Get started
            </Link>
            <Link
              href="/about-us"
              className="text-sm/6 font-semibold text-gray-50"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                alt="App screenshot"
                src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md ring-1 shadow-2xl ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Solution() {
  return (
    <div className="bg-primary-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl/10 font-semibold tracking-wide tes text-pretty text-white sm:text-4xl/12">
            Empowering Farmers. Transforming Supply Chains. Feeding the Future.
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300">
            Over 70% of Nigeria&apos;s population relies on agriculture, yet
            inefficiencies cause massive post-harvest losses, food scarcity, and
            unstable incomes. Farmers struggle to find buyers while large-scale
            processors lack reliable produce. HarvestCalc bridges this gap with:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {solutions.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary-500">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="bg-white pt-24 pb-8 sm:pt-32 sm:pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Welcome to HarvestCalc
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Africa&apos;s most dynamic agri-tech platform built to connect
            farmers directly to markets, boost productivity, reduce post-harvest
            losses, and unlock new income streams.
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Whether you&apos;re a smallholder farmer, large-scale processor,
            agro-exporter, or a member of the African diaspora, this is your
            digital hub to buy, sell, grow, and invest in agriculture—smarter.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-gray-900">{feature.name}</dt>
              <dd className="mt-1 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl pb-24 pt-8 sm:px-6 sm:pb-32 sm:pt-10 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary-950 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Harvest the Future
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="auth/signin"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
            <Link
              href="/about-us"
              className="text-sm/6 font-semibold text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#5ab62c" />
                <stop offset={1} stopColor="#336b1b" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default async function HomePage() {
  const user: User | null = await getUser();
  return (
    <MainLayout user={user}>
      <Hero />
      <Solution />
      <Features />
      <CTA />
    </MainLayout>
  );
}
