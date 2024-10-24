import styled from "styled-components";
import CommonBox from "../../ui/Box.styled";
import {
	Area,
	AreaChart,
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const StyledSales = styled.div`
	${CommonBox}
	padding: 2.2rem;
	grid-column: 1/-1;
	height: 34rem;

	/* temp */
	/* max-height: 50rem; */

	@media (min-width: 465px) {
		height: 40rem;
		grid-column: span 2;
	}

	@media (min-width: 1220px) {
		grid-column: 1/-1;
	}

	& > h2 {
		font-size: 1.8rem;

		@media (min-width: 365px) {
			font-size: 2rem;
		}

		font-weight: 600;
		margin-bottom: 2rem;
	}

	& .recharts-responsive-container {
		width: 105% !important;

		@media (min-width: 465px) {
			width: 100% !important;
		}
	}

	& .recharts-wrapper svg {
		transform: translateX(-1rem);
	}

	& .recharts-default-legend li {
		margin-top: 1rem;
		@media (min-width: 465px) {
			margin-top: 2rem;
		}
	}
	& .recharts-default-legend li:first-child {
		margin-right: 5rem !important;
	}
`;
const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
	},
];
function Sales() {
	return (
		<StyledSales>
			<h2>Sales from </h2>
			<ResponsiveContainer height={"88%"}>
				<AreaChart width={730} height={250} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Area type="monotone" dataKey="pv" stroke="#0a00c3" fill="#8686ff" />
					<Area type="monotone" dataKey="uv" stroke="#006428" fill="#87ff9f" />
				</AreaChart>
			</ResponsiveContainer>
		</StyledSales>
	);
}

export default Sales;
