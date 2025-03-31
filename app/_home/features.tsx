import {
  BanknotesIcon,
  MapPinIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

const features = [
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

export default function Features() {
  return (
    <div className="bg-primary-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Our Solution
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
            {features.map((feature) => (
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
