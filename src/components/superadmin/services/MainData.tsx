import { useState } from "react";
import { FaTrash, FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ModalTemplate } from "../../../shared/ModalTemplate";
import { HiOutlineCube } from "react-icons/hi";
import { AddServiceForm } from "./Add";

const allServicesInit = [
    "Security", "Electrical", "Landscape", "Childcare", "Common areas", "Pool cleaning",
    "Windows cleaning", "Facilities cleaning", "Laundry", "Plumbing", "Seasonal events", "Catering",
    "Concierge", "Game Rooms", "Fitness", "HVAC", "Pest Control", "Elevators",
    "Parking", "Reception", "IT Support", "Waste Management", "Gym", "Rooftop",
    "Garden", "Library", "Spa", "Cinema", "Tennis", "Sauna", "Pet Care", "Shuttle",
    "Storage", "Courier", "Bike Rental", "Valet", "Pharmacy", "ATM", "Cafeteria",
    "Printing", "First Aid", "Meditation", "Yoga", "Co-working", "Recording Studio",
    "Event Hall", "Photography", "Drones", "Solar Panel", "EV Charging", "Smart Home"
];

const ITEMS_PER_PAGE = 11;

export default function ServicesGrid() {
    const [services, setServices] = useState(allServicesInit);
    const [currentPage, setCurrentPage] = useState(1);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const totalPages = 10;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageServices = services.slice(start, start + ITEMS_PER_PAGE);

    const deleteService = (index: number) => {
        const newList = [...services];
        newList.splice(index, 1);
        setServices(newList);
    };



    const changePage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <div className="bg-white rounded-2xl p-6 font-sans"
            style={{ fontFamily: "Inter, sans-serif" }}

        >
            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {pageServices.map((name, i) => (
                    <div
                        key={i}
                        className="bg-[#E9F6FE] rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition"
                    >
                        {/* image */}
                        <div className="w-full aspect-[4/3] bg-[#D4ECFB]" />

                        {/* footer */}
                        <div className="flex items-center justify-between px-3 py-2 bg-[#E9F6FE]">
                            <span className="text-sm text-[#475467] font-medium truncate">
                                {name}
                            </span>

                            <button
                                onClick={() => deleteService(start + i)}
                                className="text-red-500 hover:opacity-70"
                            >
                                <FaTrash size={14} />
                            </button>
                        </div>
                    </div>
                ))}

                {/* ADD CARD */}
                <div
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                    className="bg-[#E9F6FE] rounded-xl min-h-[140px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-md transition"
                >
                    <div className="w-12 h-12 rounded-full bg-[#1A2A4B] text-white flex items-center justify-center">
                        <FaPlus size={18} />
                    </div>
                    <span className="text-sm text-[#475467] font-medium">
                        Add Service
                    </span>
                </div>
            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-between mt-7 pt-4 border-t border-[#e0eef7]">
                <button
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 text-sm text-[#475467] px-3 py-2 rounded-lg hover:bg-[#E9F6FE] disabled:opacity-40"
                >
                    <FaArrowLeft size={12} />
                    Previous
                </button>

                <div className="flex items-center gap-1">
                    {[1, 2, 3].map((p) => (
                        <button
                            key={p}
                            onClick={() => changePage(p)}
                            className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center transition
                ${currentPage === p ? "bg-[#1A2A4B] text-white" : "hover:bg-[#E9F6FE] text-[#475467]"}`}
                        >
                            {p}
                        </button>
                    ))}

                    <span className="px-2 text-[#475467]">...</span>

                    {[8, 9, 10].map((p) => (
                        <button
                            key={p}
                            onClick={() => changePage(p)}
                            className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center transition
                ${currentPage === p ? "bg-[#1A2A4B] text-white" : "hover:bg-[#E9F6FE] text-[#475467]"}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 text-sm text-[#475467] px-3 py-2 rounded-lg hover:bg-[#E9F6FE] disabled:opacity-40"
                >
                    Next
                    <FaArrowRight size={12} />
                </button>
            </div>


            <ModalTemplate
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Add New Service"
                subtitle="Please fill needed areas"
                Icon={HiOutlineCube}
            >
                <AddServiceForm/>
            </ModalTemplate>
        </div>
    );
}