import { useState } from "react";
import { ColorRadio, ColorRadioItem } from "./components/color-radio";
import { SizeRadio, SizeRadioItem } from "./components/size-radio";
import { cn } from "./lib/utils";

function App() {
	const [selected, setSelected] = useState("value1");

	return (
		<div className="container mx-auto p-6 flex flex-col gap-6">
			<div className="space-y-2">
				<p>Color</p>
				<ColorRadio>
					<ColorRadioItem
						value="value1"
						onClick={setSelected}
						className={cn(selected === "value1" && "border-black")}
					>
						<div className="size-6 bg-red-400" />
					</ColorRadioItem>
					<ColorRadioItem
						value="value2"
						onClick={setSelected}
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
						value="value1"
						onClick={setSelected}
						className={cn(selected === "value1" && "border-black")}
					>
						S
					</SizeRadioItem>
					<SizeRadioItem
						value="value2"
						onClick={setSelected}
						className={cn(selected === "value2" && "border-black")}
					>
						XL
					</SizeRadioItem>
				</SizeRadio>
			</div>
		</div>
	);
}

export default App;
