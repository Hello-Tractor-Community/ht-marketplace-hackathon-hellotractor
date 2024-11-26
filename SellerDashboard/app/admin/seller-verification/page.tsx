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

const verificationRequests = [
  { id: 1, seller: "Farm Equipment Co.", documentType: "Business License", status: "Pending" },
  { id: 2, seller: "Agri Machines Ltd.", documentType: "Tax Certificate", status: "Under Review" },
  { id: 3, seller: "Modern Farming Tools", documentType: "Identity Proof", status: "Approved" },
  { id: 4, seller: "Farm Solutions Inc.", documentType: "Business License", status: "Rejected" },
  { id: 5, seller: "Harvest Helpers", documentType: "Insurance Document", status: "Pending" },
]

export default function SellerVerification() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRequests = verificationRequests.filter(request =>
    request.seller.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Seller Verification</h1>
      <div className="flex justify-between">
        <Input
          placeholder="Search sellers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[300px]"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Seller</TableHead>
            <TableHead>Document Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.seller}</TableCell>
              <TableCell>{request.documentType}</TableCell>
              <TableCell>
                <Badge variant={request.status === "Approved" ? "success" : 
                               request.status === "Rejected" ? "destructive" : 
                               "secondary"}>
                  {request.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost">Review</Button>
                <Button variant="ghost" className="text-green-500">Approve</Button>
                <Button variant="ghost" className="text-red-500">Reject</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

