import { Button, ButtonGroup } from '@mui/material';

/* Need better icons */
import SignalCellularAlt1BarIcon from '@mui/icons-material/SignalCellularAlt1Bar';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function ControlButtons({ startSorting, pauseSorting, cycleSpeeds, speed }) {
  const getSpeedIcon = () => {
    switch (speed) {
      case 50:
        return <SignalCellularAlt1BarIcon />;
      case 20:
        return <SignalCellularAlt2BarIcon />;
      case 1:
        return <SignalCellularAltIcon />;
      default:
        return <SignalCellularAltIcon />;
    }
  };

  return (
    <ButtonGroup variant="contained" aria-label="Control button group">
      <Button onClick={startSorting} startIcon={<PlayArrowIcon/>}>Play</Button>
      <Button onClick={pauseSorting} startIcon={<PauseIcon/>}>Pause</Button>
      <Button onClick={cycleSpeeds} startIcon={getSpeedIcon()}></Button>
    </ButtonGroup>
  );
}

export default ControlButtons;
