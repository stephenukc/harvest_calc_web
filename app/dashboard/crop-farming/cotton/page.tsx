import {
  CropInformation,
  FarmingPractices,
  PostHarvestData,
  SoilHealthMetrics,
  WeatherData,
} from "@/components/crop-farming";
import { Divider } from "@/components/divider";
import { Heading } from "@/components/heading";

export default function Cotton() {
  return (
    <>
      <Heading className="mb-8">Cotton</Heading>
      <CropInformation />
      <Divider className="my-8" soft />
      <SoilHealthMetrics />
      <Divider className="my-8" soft />
      <FarmingPractices />
      <Divider className="my-8" soft />
      <WeatherData />
      <Divider className="my-8" soft />
      <PostHarvestData />
    </>
  );
}
