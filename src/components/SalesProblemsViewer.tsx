import React, { useState } from 'react';
import {
	Paper,
	Card,
	CardContent,
	Typography,
	TextField,
	Container,
	Box,
	Chip,
	InputAdornment,
	ThemeProvider,
	createTheme,
	CssBaseline,
} from '@mui/material';
import { Search, X } from 'lucide-react';
import { salesProblems } from '../data/sales-problems';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#90caf9',
		},
		background: {
			default: '#0a1929',
			paper: '#1e293b',
		},
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					transition: 'transform 0.2s, box-shadow 0.2s',
					'&:hover': {
						transform: 'translateY(-4px)',
						boxShadow: '0 4px 20px 0 rgba(0,0,0,0.2)',
					},
				},
			},
		},
	},
});

export const DarkProblemsViewer = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedId, setSelectedId] = useState<number | null>(null);

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
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Box
				sx={{
					minHeight: '100vh',
					bgcolor: 'background.default',
					py: 4,
				}}
			>
				<Container maxWidth="lg">
					<Box sx={{ mb: 4 }}>
						<Typography
							variant="h3"
							component="h1"
							gutterBottom
						>
							Problemy Sprzedażowe WordPress
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
						>
							Znaleziono: {filteredProblems.length}{' '}
							problemów
						</Typography>
					</Box>

					{/* Search */}
					<TextField
						fullWidth
						variant="outlined"
						placeholder="Wyszukaj problem lub rozwiązanie..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						sx={{ mb: 4 }}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Search size={20} />
								</InputAdornment>
							),
							endAdornment: searchQuery && (
								<InputAdornment position="end">
									<Box
										component="button"
										onClick={() =>
											setSearchQuery('')
										}
										sx={{
											border: 'none',
											background: 'none',
											cursor: 'pointer',
											p: 0,
											color: 'text.secondary',
											'&:hover': {
												color: 'text.primary',
											},
										}}
									>
										<X size={20} />
									</Box>
								</InputAdornment>
							),
						}}
					/>

					{/* Problems List */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
						}}
					>
						{filteredProblems.map((problem) => (
							<Card
								key={problem.id}
								onClick={() =>
									setSelectedId(problem.id)
								}
								sx={{
									cursor: 'pointer',
									border:
										selectedId === problem.id
											? 2
											: 1,
									borderColor:
										selectedId === problem.id
											? 'primary.main'
											: 'divider',
								}}
							>
								<CardContent>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											gap: 2,
											mb: 2,
										}}
									>
										<Chip
											label={`Problem ${problem.id}`}
											color="primary"
											size="small"
										/>
										<Typography
											variant="h6"
											component="h2"
										>
											{problem.title}
										</Typography>
									</Box>

									<Box sx={{ mb: 2 }}>
										<Typography
											variant="subtitle1"
											color="text.secondary"
											gutterBottom
										>
											Problem:
										</Typography>
										<Typography variant="body1">
											{problem.problem}
										</Typography>
									</Box>

									<Box>
										<Typography
											variant="subtitle1"
											color="text.secondary"
											gutterBottom
										>
											Rozwiązanie:
										</Typography>
										<Typography variant="body1">
											{problem.solution}
										</Typography>
									</Box>
								</CardContent>
							</Card>
						))}

						{filteredProblems.length === 0 && (
							<Paper
								sx={{
									p: 4,
									textAlign: 'center',
									bgcolor: 'background.paper',
								}}
							>
								<Typography
									variant="h6"
									color="text.secondary"
								>
									Nie znaleziono problemów dla
									podanej frazy
								</Typography>
							</Paper>
						)}
					</Box>
				</Container>
			</Box>
		</ThemeProvider>
	);
};
