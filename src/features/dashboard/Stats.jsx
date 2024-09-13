import {
	HiOutlineBanknotes,
	HiOutlineBriefcase,
	HiOutlineCalendarDays,
	HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

function Stats({ recentBookings, numDays, cabinsCount, recentStays }) {
	const totalBookings = recentBookings.length;

	const sales = recentBookings.reduce((prev, curr) => {
		return prev + curr.totalPrice;
	}, 0);

	const occupation =
		recentStays.reduce((acc, cur) => acc + cur.numNights, 0) /
			(numDays * cabinsCount) || 0;

	return (
		<>
			<Stat
				label="bookings"
				value={totalBookings}
				color={"blue"}
				icon={<HiOutlineBriefcase />}
			/>
			<Stat
				label="sales"
				value={formatCurrency(sales)}
				color={"green"}
				icon={<HiOutlineBanknotes />}
			/>
			<Stat
				label="check ins"
				value={recentStays.length}
				color={"indigo"}
				icon={<HiOutlineCalendarDays />}
			/>
			<Stat
				label="occupancy rate"
				value={Math.round(occupation * 100) + "%"}
				color={"yellow"}
				icon={<HiOutlineChartBar />}
			/>
		</>
	);
}

export default Stats;
