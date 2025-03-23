import { Heading } from "@/components/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import type { Metadata } from "next";
import { BreedingRecord } from "./interface";

export const metadata: Metadata = {
  title: "Breeding Records",
};

export default async function BreedingRecords() {
  const data = await fetch(`http://localhost:8000/farms/breeding-records`, {
    cache: "no-store",
  });
  const breedingRecords = await data.json();
  return (
    <>
      <Heading>Breeding Records</Heading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Breeding Date</TableHeader>
            <TableHeader>Expected Maturity Date</TableHeader>
            <TableHeader className="text-right">
              Expected Offspring Count
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {breedingRecords.results.map((breedingRecord: BreedingRecord) => (
            <TableRow key={breedingRecord.id} href="" title="">
              <TableCell>{breedingRecord.breeding_date}</TableCell>
              <TableCell>{breedingRecord.expected_maturity_date}</TableCell>
              <TableCell className="text-right">
                {breedingRecord.expected_offspring_count}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
