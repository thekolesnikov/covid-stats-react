import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSearchParams, useParams } from 'react-router-dom';

type Props = {
    filter: string;
    setFilter: (filter: string) => void;
};

export const BasicSelect = ({ filter, setFilter }: Props) => {
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
                    <MenuItem value="confirmed_diff">Confirmed</MenuItem>
                    <MenuItem value="deaths_diff">Deaths</MenuItem>
                    <MenuItem value="recovered_diff">Recovered</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
