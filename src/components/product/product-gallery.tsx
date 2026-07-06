import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface ProductGalleryProps {
	images: string[];
	title?: string;
}

export function ProductGallery({ images, title = "Product Gallery" }: ProductGalleryProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [lightboxOpen, setLightboxOpen] = useState(false);

	const goTo = useCallback(
		(index: number) => {
			setActiveIndex(((index % images.length) + images.length) % images.length);
		},
		[images.length],
	);

	const goNext = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);
	const goPrev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);

	useEffect(() => {
		if (!lightboxOpen) {
			return;
		}
		function handleKey(e: KeyboardEvent) {
			if (e.key === "Escape") {
				setLightboxOpen(false);
			}
			if (e.key === "ArrowRight") {
				goNext();
			}
			if (e.key === "ArrowLeft") {
				goPrev();
			}
		}
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [lightboxOpen, goNext, goPrev]);

	if (!images.length) {
		return null;
	}

	return (
		<>
			<div className="flex flex-col gap-6 lg:w-1/2">
				<div
					className="relative aspect-570/640 select-none overflow-hidden bg-brand-light-bg"
					onPointerDown={(e) => {
						const el = e.currentTarget;
						const startX = e.clientX;
						const onPointerUp = (up: PointerEvent) => {
							el.removeEventListener("pointerup", onPointerUp);
							el.removeEventListener("pointercancel", onPointerUp);
							const dx = up.clientX - startX;
							if (Math.abs(dx) > 20) {
								if (dx < 0) {
									goNext();
								} else {
									goPrev();
								}
							} else {
								setLightboxOpen(true);
							}
						};
						el.addEventListener("pointerup", onPointerUp);
						el.addEventListener("pointercancel", onPointerUp);
					}}
				>
					<AnimatePresence mode="wait">
						<motion.img
							alt={title}
							animate={{ opacity: 1 }}
							className="pointer-events-none h-full w-full object-cover"
							exit={{ opacity: 0 }}
							height={640}
							initial={{ opacity: 0 }}
							key={activeIndex}
							src={images[activeIndex]}
							transition={{ duration: 0.2 }}
							width={570}
						/>
					</AnimatePresence>
				</div>

				<div className="grid grid-cols-5 gap-4">
					{images.slice(0, 5).map((image, index) => (
						<button
							aria-label={`View image ${index + 1}`}
							className={cn(
								"aspect-square overflow-hidden border-2 bg-brand-light-bg transition-all",
								activeIndex === index
									? "border-brand-dark"
									: "border-transparent hover:border-brand-dark/40",
							)}
							key={image}
							onClick={() => setActiveIndex(index)}
							type="button"
						>
							<img
								alt={`${title} ${index + 1}`}
								className="h-full w-full object-cover"
								height={112}
								src={image}
								width={112}
							/>
						</button>
					))}
				</div>
			</div>

			<AnimatePresence>
				{lightboxOpen && (
					<motion.div
						animate={{ opacity: 1 }}
						className="fixed inset-0 z-dialog-overlay flex items-center justify-center bg-black/90"
						exit={{ opacity: 0 }}
						initial={{ opacity: 0 }}
						onClick={() => setLightboxOpen(false)}
						transition={{ duration: 0.2 }}
					>
						<button
							aria-label="Close image viewer"
							className="absolute top-6 right-6 z-10 text-white/70 transition-colors hover:text-white"
							onClick={() => setLightboxOpen(false)}
							type="button"
						>
							<X className="h-8 w-8" />
						</button>

						{images.length > 1 && (
							<button
								aria-label="Previous image"
								className="absolute top-1/2 left-4 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
								onClick={(e) => {
									e.stopPropagation();
									goPrev();
								}}
								type="button"
							>
								<ChevronLeft className="h-10 w-10" />
							</button>
						)}

						{images.length > 1 && (
							<button
								aria-label="Next image"
								className="absolute top-1/2 right-4 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
								onClick={(e) => {
									e.stopPropagation();
									goNext();
								}}
								type="button"
							>
								<ChevronRight className="h-10 w-10" />
							</button>
						)}

						<motion.div
							animate={{ opacity: 1, scale: 1 }}
							className="flex flex-col items-center gap-6 px-4"
							exit={{ opacity: 0, scale: 0.95 }}
							initial={{ opacity: 0, scale: 0.95 }}
							key={activeIndex}
							onClick={(e) => e.stopPropagation()}
							transition={{ duration: 0.2 }}
						>
							<img
								alt={`${title} ${activeIndex + 1}`}
								className="pointer-events-none max-h-[75vh] max-w-full select-none object-contain"
								height={600}
								onPointerDown={(e) => {
									const el = e.currentTarget;
									const startX = e.clientX;
									const onPointerUp = (up: PointerEvent) => {
										el.removeEventListener("pointerup", onPointerUp);
										el.removeEventListener("pointercancel", onPointerUp);
										const dx = up.clientX - startX;
										if (Math.abs(dx) > 20) {
											if (dx < 0) {
												goNext();
											} else {
												goPrev();
											}
										}
									};
									el.addEventListener("pointerup", onPointerUp);
									el.addEventListener("pointercancel", onPointerUp);
								}}
								src={images[activeIndex]}
								width={600}
							/>

							{images.length > 1 && (
								<div className="flex gap-3">
									{images.map((image, index) => (
										<button
											aria-label={`View image ${index + 1}`}
											className={cn(
												"h-16 w-16 shrink-0 overflow-hidden border-2 transition-all",
												activeIndex === index
													? "border-white"
													: "border-transparent opacity-50 hover:opacity-100",
											)}
											key={image}
											onClick={() => setActiveIndex(index)}
											type="button"
										>
											<img
												alt={`${title} ${index + 1}`}
												className="h-full w-full object-cover"
												height={64}
												src={image}
												width={64}
											/>
										</button>
									))}
								</div>
							)}

							<span className="text-sm text-white/60">
								{activeIndex + 1} / {images.length}
							</span>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
