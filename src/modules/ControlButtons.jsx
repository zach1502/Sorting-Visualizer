import { Button, ButtonGroup } from '@mui/material';

function ControlButtons({ startSorting, pauseSorting }) {
  return (
    <ButtonGroup variant="contained" aria-label="Control button group">
      <Button onClick={startSorting}>Play</Button>
      <Button onClick={pauseSorting}>Pause</Button>
    </ButtonGroup>
  );
}

export default ControlButtons;
