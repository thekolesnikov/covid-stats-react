import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSearchParams, useParams } from 'react-router-dom';

export default function BasicSelect() {
    const [filter, setFilter] = useState('confirmed');
    const [params, setParams] = useSearchParams();

    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
        // if (params.has('dataFrom') && params.has('dataTo')) {
        //     setParams({
        //         case: event.target.value,
        //     });
        // }
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Case</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="Case"
                    onChange={handleChange}
                >
                    <MenuItem value="confirmed">Confirmed</MenuItem>
                    <MenuItem value="death">Death</MenuItem>
                    <MenuItem value="recovered">Recovered</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
