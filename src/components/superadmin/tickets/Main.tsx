import { useState } from "react"
import { PageHeader } from "../../../shared/headers/PageHeader"
import { TicketsTable, type Ticket, type TicketFilter } from "./Ticketstable"


const NEW_TICKETS: Ticket[] = [
    {
        id: "nt-1",
        buildingOwner: { name: "Ahmed Mohamed", email: "name@company.sa" },
        orderId: "SERF0032",
        receivingDate: "16/01/2025",
        status: "New",
        service: "Cleaning",
        requiredDate: "20/01/2025",
    },
    {
        id: "nt-2",
        buildingOwner: { name: "Ahmed Mohamed", email: "name@company.sa" },
        orderId: "SERF0033",
        receivingDate: "24/01/2025",
        status: "New",
        service: "Maintenance",
        requiredDate: "06/02/2025",
    },
    {
        id: "nt-3",
        buildingOwner: { name: "Ahmed Mohamed", email: "name@company.sa" },
        orderId: "SERF0034",
        receivingDate: "30/01/2025",
        status: "New",
        service: "Security",
        requiredDate: "20/02/2025",
    },
]

const IN_PROGRESS_TICKETS: Ticket[] = [
    {
        id: "ip-1",
        buildingOwner: { name: "Ahmed Mohamed", email: "name@company.sa" },
        orderId: "SERF0032",
        receivingDate: "16/01/2025",
        status: "In progress",
        service: "Cleaning",
        requiredDate: "20/01/2025",
    },
    {
        id: "ip-2",
        buildingOwner: { name: "Ahmed Mohamed", email: "name@company.sa" },
        orderId: "SERF0033",
        receivingDate: "24/01/2025",
        status: "In progress",
        service: "Plumbing",
        requiredDate: "06/02/2025",
    },
    {
        id: "ip-3",
        buildingOwner: { name: "Ahmed Mohamed", email: "name@company.sa" },
        orderId: "SERF0034",
        receivingDate: "30/01/2025",
        status: "Done",
        service: "Security",
        requiredDate: "20/02/2025",
    },
]


const MainTickets = () => {
    const [activeFilters, setActiveFilters] = useState<TicketFilter[]>([
        { label: "Pending", value: "pending" },
        { label: "Recent", value: "recent" },
    ])

    const handleRemoveFilter = (value: string) => {
        setActiveFilters((prev) => prev.filter((f) => f.value !== value))
    }

    const handleView = (ticket: Ticket) => {
        // Navigate to ticket detail — replace with your router logic
        console.log("View ticket:", ticket.id)
    }

    return (
        <div className="p-6 space-y-6">
            {/* ── Page Header ── */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4">
                <PageHeader
                    breadcrumb="Dashboard / Tickets"
                    title="Tickets"
                />
            </div>

            {/* ── New Tickets ── */}
            <TicketsTable
                title="New Tickets"
                tickets={NEW_TICKETS}
                onView={handleView}
                pageSize={5}
            />

            {/* ── Tickets In Progress ── */}
            <TicketsTable
                title="Tickets In Progress"
                tickets={IN_PROGRESS_TICKETS}
                filters={activeFilters}
                onRemoveFilter={handleRemoveFilter}
                onMoreFilters={() => console.log("More filters clicked")}
                onSearch={(q) => console.log("Search:", q)}
                onView={handleView}
                pageSize={5}
            />
        </div>
    )
}

export default MainTickets