interface DeleteButtonProps {
	eventTitle: string;
	onDelete: () => void;
}

export const DeleteButton = ({ eventTitle, onDelete }: DeleteButtonProps) => {
	const handleDeleteClick = () => {
		const shouldDelete = window.confirm(
			`Are you sure you want to delete "${eventTitle}"? This action cannot be undone.`,
		);

		if (shouldDelete) {
			onDelete();
		}
	};

	return (
		<button
			type="button"
			onClick={handleDeleteClick}
			className="rounded-md bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
		>
			Delete
		</button>
	);
};
