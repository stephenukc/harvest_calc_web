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
import { HarvestRecord } from "./interface";

export const metadata: Metadata = {
  title: "Harvest Records",
};

export default async function HarvestRecords() {
  const data = await fetch(`http://localhost:8000/farms/harvest-records`, {
    cache: "no-store",
  });
  const harvestRecords = await data.json();
  return (
    <>
      <Heading>Harvest Records</Heading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Title</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader className="text-right">Date</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {harvestRecords.results.map((harvestRecord: HarvestRecord) => (
            <TableRow key={transaction.id} href="" title="">
              <TableCell>{transaction.title}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell className="text-right">
                {transaction.created_at}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
