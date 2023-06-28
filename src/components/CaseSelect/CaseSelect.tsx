import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
    filter: string;
    setFilter: (filter: string) => void;
};

export const CaseSelect = ({ filter, setFilter }: Props) => {
    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
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
