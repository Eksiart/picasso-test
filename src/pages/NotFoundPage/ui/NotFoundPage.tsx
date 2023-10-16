import { Page } from "@/widgets/Page";

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
	return (
		<Page
			className={className}
		>
			Page Not Found
		</Page>
	);
};
