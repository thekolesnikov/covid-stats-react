import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchRegionsList } from '../../utils/api';
import { IRegions } from '../../types/types';

type Props = {
    region: string;
    setRegion: (setRegion: string) => void;
};

export const RegionSelect = ({ region, setRegion }: Props) => {
    const [regionList, setRegionList] = useState<IRegions | undefined>();
    const handleChange = (event: SelectChangeEvent) => {
        setRegion(event.target.value as string);
    };

    useEffect(() => {
        fetchRegionsList(setRegionList);
    }, []);

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Region</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    label="Region"
                    onChange={handleChange}
                >
                    <MenuItem value="all">All</MenuItem>
                    {regionList &&
                        regionList.data.map((region) => {
                            return (
                                <MenuItem key={region.name} value={region.iso}>
                                    {region.name}
                                </MenuItem>
                            );
                        })}
                </Select>
            </FormControl>
        </Box>
    );
};
