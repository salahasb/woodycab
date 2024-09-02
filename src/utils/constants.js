export const TOAST_TIMEOUT = 8000;

export const PAGE_SIZE = 5;

export const OPERATIONS = {
	cabins: {
		filters: [
			{ label: "All", filterBy: "discount", value: "all" },
			{ label: "Discount", filterBy: "discount", value: "discount" },
			{ label: "No discount", filterBy: "discount", value: "no-discount" },
		],
		sorts: [
			{ value: "name-asc", label: "Sort by name (A-Z)" },
			{ value: "name-desc", label: "Sort by name (Z-A)" },
			{ value: "regularPrice-asc", label: "Sort by price (low first)" },
			{ value: "regularPrice-desc", label: "Sort by price (high first)" },
			{ value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
			{ value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
		],
	},
	bookings: {
		filters: [
			{ label: "All", filterBy: "status", value: "all" },
			{ label: "Checked out", filterBy: "status", value: "checked-out" },
			{ label: "Checked in", filterBy: "status", value: "checked-in" },
			{ label: "unconfirmed", filterBy: "status", value: "unconfirmed" },
		],
		sorts: [
			{ value: "startDate-desc", label: "Sort by date (recent first)" },
			{ value: "startDate-asc", label: "Sort by date (earlier first)" },
			{ value: "totalPrice-desc", label: "Sort by amount (high first)" },
			{ value: "totalPrice-asc", label: "Sort by amount (low first)" },
		],
	},
	statistics: {
		filters: [
			{ label: "Last 7 days", filterBy: "last", value: "7" },
			{ label: "Last 30 days", filterBy: "last", value: "30" },
			{ label: "Last 90 days", filterBy: "last", value: "90" },
		],
	},
};
