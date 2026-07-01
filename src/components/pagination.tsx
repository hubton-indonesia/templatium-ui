import { cn } from "../lib/utils";

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
	maxPages = 7,
}: {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	maxPages?: number;
}) {
	const handlePageChange = (newPage: number) => {
		const productBrowser = document.querySelector(
			"#product-browser",
		) as HTMLDivElement;
		if (productBrowser) {
			productBrowser.scrollIntoView();
		} else {
			window.scrollTo({ top: 0 });
		}

		onPageChange(newPage);
	};

	const visiblePages = getVisiblePages(currentPage, totalPages, maxPages);

	return (
		<div className="mt-20 flex items-center justify-center select-none">
			<button
				title="Previous Page"
				aria-label="Previous Page"
				className="flex h-9 lg:h-10 w-9 lg:w-10 items-center justify-center text-foreground disabled:opacity-30 cursor-pointer hover:bg-foreground/5 disabled:cursor-not-allowed"
				disabled={currentPage === 1}
				onClick={() => handlePageChange(currentPage - 1)}
				type="button"
			>
				<svg
					fill="none"
					height="12"
					viewBox="0 0 6 12"
					width="6"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Previous</title>
					<path
						d="M5 1L1 6L5 11"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
					/>
				</svg>
			</button>
			{visiblePages.map((page) =>
				page === "ellipsis" ? (
					<span
						key={`ellipsis-${page}`}
						className="flex h-9 lg:h-10 w-9 lg:w-10 items-center justify-center text-muted-foreground"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1"
							strokeLinecap="round"
							strokeLinejoin="round"
							data-class="lucide lucide-ellipsis-icon lucide-ellipsis"
						>
							<title>Ellipsis</title>
							<circle cx="12" cy="12" r="0.5" />
							<circle cx="19" cy="12" r="0.5" />
							<circle cx="5" cy="12" r="0.5" />
						</svg>
					</span>
				) : (
					<button
						className={cn(
							"flex h-9 lg:h-10 w-9 lg:w-10 items-center justify-center text-sm transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed",
							page === currentPage
								? "font-semibold bg-pagination-active-background text-pagination-active-foreground"
								: "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
						)}
						key={page}
						disabled={page === currentPage}
						onClick={() => handlePageChange(page)}
						type="button"
						aria-label={`Page ${page}`}
						title={`Page ${page}`}
					>
						{page}
					</button>
				),
			)}
			<button
				title="Next Page"
				aria-label="Next Page"
				className="flex h-9 lg:h-10 w-9 lg:w-10 items-center justify-center text-foreground disabled:opacity-30 cursor-pointer hover:bg-foreground/5 disabled:cursor-not-allowed"
				disabled={currentPage === totalPages}
				onClick={() => handlePageChange(currentPage + 1)}
				type="button"
			>
				<svg
					fill="none"
					height="12"
					viewBox="0 0 6 12"
					width="6"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Next</title>
					<path
						d="M1 1L5 6L1 11"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
					/>
				</svg>
			</button>
		</div>
	);
}

function getVisiblePages(
	currentPage: number,
	totalPages: number,
	maxPages: number,
): (number | "ellipsis")[] {
	if (totalPages <= maxPages) {
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}

	const pages: (number | "ellipsis")[] = [];
	const siblings = Math.max(1, Math.floor((maxPages - 4) / 2));

	const rangeStart = Math.max(2, currentPage - siblings);
	const rangeEnd = Math.min(totalPages - 1, currentPage + siblings);

	pages.push(1);

	if (rangeStart > 2) {
		pages.push("ellipsis");
	}

	for (let i = rangeStart; i <= rangeEnd; i++) {
		pages.push(i);
	}

	if (rangeEnd < totalPages - 1) {
		pages.push("ellipsis");
	}

	pages.push(totalPages);

	return pages;
}
