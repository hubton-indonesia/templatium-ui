import { Fragment } from "react/jsx-runtime";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface IBreadcrumbItem {
	label: string;
	href?: string;
}

export function BreadcrumbIsland({
	items,
	className,
}: {
	items: IBreadcrumbItem[];
	className?: string;
}) {
	return (
		<Breadcrumb className={className}>
			<BreadcrumbList>
				{items.map((item, i) => (
					<Fragment key={item.href ?? item.label}>
						{i > 0 && <BreadcrumbSeparator />}
						<BreadcrumbItem key={item.href ?? item.label}>
							{item.href ? (
								<BreadcrumbLink render={<a href={item.href} />}>
									{item.label}
								</BreadcrumbLink>
							) : (
								<BreadcrumbPage>{item.label}</BreadcrumbPage>
							)}
						</BreadcrumbItem>
					</Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
