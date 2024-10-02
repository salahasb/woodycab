import styled from "styled-components";
import CommonBox from "../../ui/Box.styled";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { prepareData } from "./helpers";

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

const StyledStaySummary = styled.div`
	${CommonBox}
	padding: 2.2rem;

	@media (min-width: 465px) {
		grid-column: span 2;
	}

	@media (min-width: 850px) {
		grid-column: span 1;
	}

	@media (min-width: 1024px) {
		grid-column: span 2;
	}

	& > h2 {
		font-size: 2.2rem;
		font-weight: 600;
		margin-bottom: 2rem;
	}

	/* PieCharts */
	& > .recharts-wrapper {
		display: flex;
		flex-direction: row;

		justify-content: center;
		align-items: center;
		gap: 3rem;
		margin: 0rem auto;
		padding: 2rem 0;

		width: 100% !important;
		height: fit-content !important;
		max-height: initial !important;
		max-width: initial !important;

		@media (min-width: 440px) {
			flex-direction: row;
		}

		@media (min-width: 1024px) {
			padding: 2rem;
		}

		/* Pie svg */
		& > .recharts-surface {
			max-width: 220px;

			& .recharts-sector:focus {
				outline: 0;
			}
		}

		/* Legend */
		& > .recharts-legend-wrapper {
			position: initial !important;
			flex-shrink: 0;
		}
	}
`;

function StaySummary({ stays }) {
	//
	const chartData = prepareData(startDataLight, stays);

	return (
		<StyledStaySummary>
			<h2>Stay duration summary</h2>

			<PieChart width={220} height={220}>
				<Pie
					data={chartData}
					dataKey="value"
					nameKey="duration"
					cx="50%"
					cy="105"
					innerRadius={86}
					outerRadius={109}
					fill="#82ca9d"
					paddingAngle={2}
				>
					{chartData.map(({ color, duration }) => (
						<Cell key={duration} fill={color} stroke={color} />
					))}
				</Pie>

				<Tooltip />
				<Legend layout="vertical" iconSize={7} iconType="circle" />
			</PieChart>
		</StyledStaySummary>
	);
}

export default StaySummary;
