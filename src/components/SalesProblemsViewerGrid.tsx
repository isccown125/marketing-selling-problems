import React, { useState } from 'react';
import { LayoutGrid, List, BarChart, Search, ChevronDown } from 'lucide-react';
import { salesProblems } from '../data/sales-problems';

type ViewType = 'grid' | 'list' | 'stats';

interface NavigationProps {
	currentView: ViewType;
	onViewChange: (view: ViewType) => void;
}

const Navigation: React.FC<NavigationProps> = ({
	currentView,
	onViewChange,
}) => {
	const navItems = [
		{ id: 'grid', label: 'Siatka', icon: LayoutGrid },
		{ id: 'list', label: 'Lista', icon: List },
		{ id: 'stats', label: 'Statystyki', icon: BarChart },
	] as const;

	return (
		<div className="flex items-center gap-2 bg-slate-800 p-2 rounded-lg">
			{navItems.map((item) => {
				const Icon = item.icon;
				return (
					<button
						key={item.id}
						onClick={() => onViewChange(item.id)}
						className={`
              flex items-center gap-2 px-4 py-2 rounded-md transition-colors
              ${
				currentView === item.id
					? 'bg-blue-600 text-white'
					: 'text-gray-400 hover:bg-slate-700 hover:text-white'
			}
            `}
					>
						<Icon size={20} />
						<span>{item.label}</span>
					</button>
				);
			})}
		</div>
	);
};
interface AccordionItemProps {
	problem: {
		id: number;
		title: string;
		problem: string;
		solution: string;
	};
	isOpen: boolean;
	onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
	problem,
	isOpen,
	onToggle,
}) => {
	return (
		<div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
			<button
				onClick={onToggle}
				className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700 transition-colors duration-200"
			>
				<div className="flex items-center gap-4">
					<span className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full text-sm">
						#{problem.id}
					</span>
					<h3 className="text-xl font-semibold text-white">
						{problem.title}
					</h3>
				</div>
				<ChevronDown
					className={`text-gray-400 transition-transform duration-200 ${
						isOpen ? 'transform rotate-180' : ''
					}`}
					size={20}
				/>
			</button>

			<div
				className={`transition-all duration-200 ease-in-out ${
					isOpen
						? 'max-h-[500px] opacity-100'
						: 'max-h-0 opacity-0'
				}`}
			>
				<div className="px-6 py-4 space-y-4 border-t border-slate-700">
					<div>
						<h4 className="text-white font-medium mb-2">
							Problem:
						</h4>
						<p className="text-gray-300">{problem.problem}</p>
					</div>
					<div>
						<h4 className="text-white font-medium mb-2">
							Rozwiązanie:
						</h4>
						<p className="text-gray-300">
							{problem.solution}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const ListView = () => {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (id: number) => {
		setOpenItems((prev) =>
			prev.includes(id)
				? prev.filter((item) => item !== id)
				: [...prev, id]
		);
	};

	const toggleAll = () => {
		setOpenItems((prev) =>
			prev.length === salesProblems.length
				? []
				: salesProblems.map((p) => p.id)
		);
	};

	return (
		<div className="space-y-4">
			<button
				onClick={toggleAll}
				className="mb-4 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
			>
				{openItems.length === salesProblems.length
					? 'Zwiń wszystkie'
					: 'Rozwiń wszystkie'}
			</button>

			{salesProblems.map((problem) => (
				<AccordionItem
					key={problem.id}
					problem={problem}
					isOpen={openItems.includes(problem.id)}
					onToggle={() => toggleItem(problem.id)}
				/>
			))}
		</div>
	);
};

const StatsView = () => {
	// Przykładowe statystyki
	const categories = salesProblems.reduce((acc, problem) => {
		const type =
			problem.id <= 10
				? 'Biznesowe'
				: problem.id <= 20
				? 'Techniczne'
				: 'Operacyjne';
		acc[type] = (acc[type] || 0) + 1;
		return acc;
	}, {} as Record<string, number>);

	return (
		<div className="bg-slate-800 p-6 rounded-lg">
			<h3 className="text-xl font-semibold text-white mb-6">
				Statystyki Problemów
			</h3>
			<div className="space-y-4">
				{Object.entries(categories).map(([category, count]) => (
					<div
						key={category}
						className="bg-slate-700 p-4 rounded-lg"
					>
						<div className="flex justify-between items-center mb-2">
							<span className="text-white">
								{category}
							</span>
							<span className="text-blue-400 font-semibold">
								{count}
							</span>
						</div>
						<div className="w-full bg-slate-600 rounded-full h-2">
							<div
								className="bg-blue-500 h-2 rounded-full"
								style={{
									width: `${
										(count /
											salesProblems.length) *
										100
									}%`,
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export const ProblemViewerWithNav = () => {
	const [view, setView] = useState<ViewType>('list');
	const [searchQuery, setSearchQuery] = useState('');

	const filteredProblems = salesProblems.filter(
		(problem) =>
			problem.title
				.toLowerCase()
				.includes(searchQuery.toLowerCase()) ||
			problem.problem
				.toLowerCase()
				.includes(searchQuery.toLowerCase()) ||
			problem.solution
				.toLowerCase()
				.includes(searchQuery.toLowerCase())
	);

	return (
		<div className="min-h-screen bg-slate-900 p-6">
			<div className="max-w-7xl mx-auto space-y-6">
				{/* Header */}
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
					<h1 className="text-3xl font-bold text-white">
						Problemy Sprzedażowe WordPress
					</h1>
					<Navigation
						currentView={view}
						onViewChange={setView}
					/>
				</div>

				{/* Search */}
				<div className="relative">
					<input
						type="text"
						className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
						placeholder="Wyszukaj problem..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<Search
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
						size={20}
					/>
				</div>

				{/* Content */}
				{view === 'grid' && (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{filteredProblems.map((problem) => (
							<div
								key={problem.id}
								className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600"
							>
								<div className="flex items-center gap-2 mb-3">
									<span className="px-2 py-1 bg-blue-900 text-blue-100 text-sm rounded-full">
										#{problem.id}
									</span>
								</div>
								<h3 className="text-white font-medium mb-2">
									{problem.title}
								</h3>
								<p className="text-gray-400 line-clamp-3">
									{problem.problem}
								</p>
							</div>
						))}
					</div>
				)}

				{view === 'list' && <ListView />}
				{view === 'stats' && <StatsView />}

				{/* No results message */}
				{filteredProblems.length === 0 && (
					<div className="text-center py-8">
						<p className="text-gray-400 text-lg">
							Nie znaleziono problemów dla podanej frazy
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
