import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [plan, setPlan] = React.useState('');

  const handleChange = (event) => {
    setPlan(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 450 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Plan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={plan}
          label="Plan"
          onChange={handleChange}
        >
          <MenuItem value={10}>Member</MenuItem>
          <MenuItem value={20}>Family</MenuItem>
          <MenuItem value={30}>Official</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
