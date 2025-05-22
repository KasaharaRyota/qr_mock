import React, { useEffect, useState } from "react"
import { Box, TextField } from "@mui/material"

function App() {
	const [baseName, setBaseName] = useState();
	const [companyName, setCompanyName] = useState();
	const [carNumber, setCarNumber] = useState();

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);

		setBaseName(params.get('baseName'));
		setCompanyName(params.get('companyName'));
		setCarNumber(params.get('carNumber'));
	}, []);

	return (
		<>
			<Box sx={{ width: "80%", mt: 5, mx: "auto" }}>
				<Box>
					<TextField label="拠点名" variant="outlined" size="small" defaultValue={ baseName } />
				</Box>
				<Box sx={{ mt: 2 }}>
					<TextField label="会社名" variant="outlined" size="small" defaultValue={ companyName } />
				</Box>
				<Box sx={{ mt: 2 }}>
					<TextField label="車番号" variant="outlined" size="small" defaultValue={ carNumber } />
				</Box>
			</Box>
		</>
	)
}

export default App
