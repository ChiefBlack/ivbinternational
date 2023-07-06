import Box from '@mui/material/Box';
import content from './content';

const MyDiv = () => {
  return (
    <Box sx={{
      display: 'flex',
      boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.3)',
    }}>
      <Box sx={{ flex: '1 1 30%' }}>conte{content.map(map=> map)}</Box>
      <Box sx={{ flex: '1 1 30%' }}>Column 2</Box>
      <Box sx={{ flex: '1 1 30%' }}>Column 3</Box>
    </Box>
  );
}

export default MyDiv;