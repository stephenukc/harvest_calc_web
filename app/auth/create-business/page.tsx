import { Heading } from "@/components/heading";
import { Metadata } from "next";
import CreateBusinessForm from "./create-business-form";

export const metadata: Metadata = {
  title: "Create Business Profile",
};

export default function CreateBusinessProfile() {
  return (
    <>
      <Heading>Create Business Profile</Heading>
      <CreateBusinessForm />
    </>
  );
}
