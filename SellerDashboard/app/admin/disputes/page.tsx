"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const disputes = [
  { id: 1, buyer: "John Doe", seller: "Farm Equipment Co.", item: "Tractor Model X", reason: "Item not as described", status: "Open" },
  { id: 2, buyer: "Jane Smith", seller: "Agri Machines Ltd.", item: "Harvester Y-2000", reason: "Late delivery", status: "Under Review" },
  { id: 3, buyer: "Bob Johnson", seller: "Green Farms Inc.", item: "Fertilizer Pack", reason: "Damaged during shipping", status: "Resolved" },
  { id: 4, buyer: "Alice Brown", seller: "Water Solutions", item: "Irrigation System", reason: "Wrong item received", status: "Open" },
  { id: 5, buyer: "Charlie Wilson", seller: "Modern Farming Tools", item: "Seeder Pro", reason: "Refund not processed", status: "Escalated" },
]

export default function DisputeResolution() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDisputes = disputes.filter(dispute =>
    dispute.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dispute.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dispute.item.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>
      <div className="flex justify-between">
        <Input
          placeholder="Search disputes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[300px]"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Buyer</TableHead>
            <TableHead>Seller</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDisputes.map((dispute) => (
            <TableRow key={dispute.id}>
              <TableCell>{dispute.buyer}</TableCell>
              <TableCell>{dispute.seller}</TableCell>
              <TableCell>{dispute.item}</TableCell>
              <TableCell>{dispute.reason}</TableCell>
              <TableCell>
                <Badge variant={dispute.status === "Resolved" ? "success" : 
                               dispute.status === "Escalated" ? "destructive" : 
                               "secondary"}>
                  {dispute.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost">Review</Button>
                <Button variant="ghost" className="text-green-500">Resolve</Button>
                <Button variant="ghost" className="text-red-500">Escalate</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

