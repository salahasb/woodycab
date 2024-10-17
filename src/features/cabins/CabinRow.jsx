import styled from "styled-components";
// import { useEffect, useState } from "react";
// import { BsThreeDotsVertical } from "react-icons/bs";

// import IconButton from "../../ui/Options";
// import { useToaster } from "../../contexts/ToasterContext";
import Table from "../../ui/Table";

import CabinOptions from "./CabinOptions";

const Img = styled.img`
	display: block;
	width: 4rem;
	aspect-ratio: 3 / 2;
	object-fit: cover;
	object-position: center center;
	transform: scale(1.5);
	margin: -2px 0px;

	@media (min-width: 1024px) {
		width: 6.4rem;
	}
`;

const Cabin = styled.div`
	font-size: 1.2rem;
	font-weight: 600;
	font-family: "Sono";

	@media (min-width: 1024px) {
		font-size: 1.6rem;
	}
`;

const Price = styled.div`
	font-family: "Sono";
	font-weight: 600;
`;

const Discount = styled.div`
	font-family: "Sono";
	font-weight: 500;
	color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
	const { name, image, maxCapacity, regularPrice, discount } = cabin;

	return (
		<>
			<Table.Row>
				<Img src={image} />
				<Cabin>{name}</Cabin>
				<div>Fits up to {maxCapacity} guests</div>
				<Price>${regularPrice}</Price>
				{discount ? <Discount>${discount}</Discount> : <span>&mdash;</span>}

				<CabinOptions cabin={cabin} />
			</Table.Row>
		</>
	);
}

export default CabinRow;
