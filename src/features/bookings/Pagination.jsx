import { useSearchParams } from "react-router-dom";
import Button from "../../ui/Button.styled";
import useBookings from "./useBookings";
import { PAGE_SIZE } from "../../utils/constants";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Pagination() {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
	const {
		data: { count, rangeFrom, rangeTo },
	} = useBookings();

	if (count <= PAGE_SIZE) return;

	const page = +searchParams.get("page") || 1;

	const isLastPage = count - PAGE_SIZE * page <= 0;

	return (
		<>
			<p>
				Showing <span>{rangeFrom + 1} </span>to{" "}
				<span>{isLastPage ? count : rangeTo}</span> of <span>{count}</span>{" "}
				results
			</p>

			<div>
				<Button
					disabled={page === 1}
					$variation="pagination"
					onClick={() => {
						// setPage((p) => p - 1);
						searchParams.set("page", page - 1);
						setSearchParams(searchParams);
					}}
				>
					<SlArrowLeft size={8} /> <span>Previous</span>
				</Button>
				<Button
					disabled={isLastPage}
					$variation="pagination"
					onClick={() => {
						// setPage((p) => p + 1);

						searchParams.set("page", page + 1);

						setSearchParams(searchParams);
					}}
				>
					<span>Next</span>
					<SlArrowRight size={8} />{" "}
				</Button>
			</div>
		</>
	);
}

export default Pagination;
