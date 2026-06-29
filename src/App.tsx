import { useState } from "react";
import {
	ColorRadio,
	ColorRadioItem,
	Counter,
	Pagination,
	SizeRadio,
	SizeRadioItem,
} from "./index";
import { cn } from "./lib/utils";

function App() {
	const [selected, setSelected] = useState("value1");
	const [count, setCount] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<div className="container mx-auto p-6 flex flex-col gap-6">
			<div className="space-y-2">
				<p>Color</p>
				<ColorRadio>
					<ColorRadioItem
						onClick={() => setSelected("value1")}
						className={cn(selected === "value1" && "border-black")}
					>
						<div className="size-6 bg-red-400" />
					</ColorRadioItem>
					<ColorRadioItem
						onClick={() => setSelected("value2")}
						className={cn(selected === "value2" && "border-black")}
					>
						<div className="size-6 bg-blue-400" />
					</ColorRadioItem>
				</ColorRadio>
			</div>
			<div className="space-y-2">
				<p>Size</p>
				<SizeRadio>
					<SizeRadioItem
						onClick={() => setSelected("value1")}
						className={cn(selected === "value1" && "border-black")}
					>
						S
					</SizeRadioItem>
					<SizeRadioItem
						onClick={() => setSelected("value2")}
						className={cn(selected === "value2" && "border-black")}
					>
						XL
					</SizeRadioItem>
				</SizeRadio>
			</div>
			<div className="w-full space-y-2">
				<p>Counter</p>
				<div className="flex gap-2 w-full">
					<Counter
						className="grow"
						onAdd={() => setCount(count + 1)}
						onSubtract={() => setCount(Math.max(1, count - 1))}
					>
						{count}
					</Counter>
					<button type="button" className="block px-4 h-11 lg:h-14 border">
						Submit
					</button>
				</div>
			</div>
			<div>
				<Pagination
					currentPage={currentPage}
					totalPages={10}
					onPageChange={setCurrentPage}
				/>
			</div>
		</div>
	);
}

export default App;
