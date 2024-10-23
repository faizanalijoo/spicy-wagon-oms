import { InputLabel, Stack } from '@mui/material';
import React from 'react';

export default function LabelledInput({ children, label, required, transparent, width, icon }) {
	return (
		<Stack
			sx={{
				'& .MuiInputLabel-root': {
					fontSize: 12,
					color: '#3f3e3f',
					fontWeight: 400,
				},
				'& .MuiTypography-root': {
					fontSize: 12,
					fontWeight: 400,
				},
				'& .MuiInputBase-root.Mui-disabled': {
					bgcolor: '#f5f5f5',
				},
			}}
			flex={1}
			width={width || '100%'}
		>
			<Stack
				m={label ? 0.5 : 0}
				ml={0.5}
				sx={{ svg: { fontSize: 12, color: '#3f3e3f' } }}
				direction="row"
				alignItems="center"
				gap={0.5}
			>
				{icon}
				<InputLabel>
					{label} {required && <span style={{ color: 'red' }}>*</span>}
				</InputLabel>
			</Stack>
			{children}
		</Stack>
	);
}
