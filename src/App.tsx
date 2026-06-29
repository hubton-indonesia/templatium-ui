import { useState } from "react";
import { SizeRadio, SizeRadioItem } from "./components/size-radio";
import { cn } from "./lib/utils";

function App() {
	const [selected, setSelected] = useState("value1");

	return (
		<div className="container mx-auto p-6">
			<SizeRadio>
				<SizeRadioItem
					value="value1"
					onClick={setSelected}
					className={cn(selected === "value1" && "border-black")}
				>
					Label 1
				</SizeRadioItem>
				<SizeRadioItem
					value="value2"
					onClick={setSelected}
					className={cn(selected === "value2" && "border-black")}
				>
					Label 2
				</SizeRadioItem>
			</SizeRadio>
		</div>
	);
}

export default App;
