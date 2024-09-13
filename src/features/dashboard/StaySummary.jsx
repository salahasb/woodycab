import styled from "styled-components";
import CommonBox from "../../ui/Box.styled";
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import { prepareData } from "./helpers";

const StyledStaySummary = styled.div`
	${CommonBox}
	grid-column: span 2;

	padding: 2.2rem;

	& > h2 {
		font-size: 2.2rem;
		font-weight: 600;
		margin-bottom: 2rem;
	}

	& > div:first-of-type {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 6rem;

		/* Pie chart */
		& > div {
		}
	}
`;

const startDataLight = [
	{
		duration: "1 night",
		value: 0,
		color: "#ef4444",
	},
	{
		duration: "2 nights",
		value: 0,
		color: "#f97316",
	},
	{
		duration: "3 nights",
		value: 0,
		color: "#eab308",
	},
	{
		duration: "4-5 nights",
		value: 0,
		color: "#84cc16",
	},
	{
		duration: "6-7 nights",
		value: 0,
		color: "#22c55e",
	},
	{
		duration: "8-14 nights",
		value: 0,
		color: "#14b8a6",
	},
	{
		duration: "15-21 nights",
		value: 0,
		color: "#3b82f6",
	},
	{
		duration: "21+ nights",
		value: 0,
		color: "#a855f7",
	},
];

const startDataDark = [
	{
		duration: "1 night",
		value: 0,
		color: "#b91c1c",
	},
	{
		duration: "2 nights",
		value: 0,
		color: "#c2410c",
	},
	{
		duration: "3 nights",
		value: 0,
		color: "#a16207",
	},
	{
		duration: "4-5 nights",
		value: 0,
		color: "#4d7c0f",
	},
	{
		duration: "6-7 nights",
		value: 0,
		color: "#15803d",
	},
	{
		duration: "8-14 nights",
		value: 0,
		color: "#0f766e",
	},
	{
		duration: "15-21 nights",
		value: 0,
		color: "#1d4ed8",
	},
	{
		duration: "21+ nights",
		value: 0,
		color: "#7e22ce",
	},
];

function StaySummary({ stays }) {
	//
	const chartData = prepareData(startDataLight, stays);

	console.log(chartData);
	return (
		<StyledStaySummary>
			<h2>Stay duration summary</h2>

			{/* <div> */}
			<ResponsiveContainer width={"100%"} height="82%">
				<PieChart width={220} height={220}>
					<Pie
						data={chartData}
						dataKey="value"
						nameKey="duration"
						cx="50%"
						cy="50%"
						innerRadius={82}
						outerRadius={110}
						fill="#82ca9d"
						paddingAngle={2}
					>
						{chartData.map(({ color, duration }) => (
							<Cell key={duration} fill={color} stroke={color} />
						))}
					</Pie>
					<Tooltip />
					<Legend
						verticalAlign="middle"
						align="right"
						width="30%"
						layout="vertical"
						iconSize={15}
						iconType="circle"
					/>
				</PieChart>
			</ResponsiveContainer>
			{/* </div> */}
		</StyledStaySummary>
	);
}

export default StaySummary;
