import Checkbox from '@mui/material/Checkbox';

export default function Checkboxes() {
  return (
    <div>
      <Checkbox 
        sx={{ 
          color: 'rgb(61, 66, 90)', 
          '&.Mui-checked': {
            color: 'rgb(205,70,49)', 
          },
          '& .MuiSvgIcon-root': { fontSize: 38 }
        }} 
      />
    </div>
  );
}