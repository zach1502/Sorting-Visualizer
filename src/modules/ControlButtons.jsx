import React from "react";
import { Button, ButtonGroup } from '@mui/material';

/* Need better icons */
import SignalCellularAlt1BarIcon from '@mui/icons-material/SignalCellularAlt1Bar';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function ControlButtons({ startSorting, pauseSorting, cycleSpeeds, speed}) {
  const SLOW_STEPS = 500;
  const MEDIUM_STEPS = 100;
  const FAST_STEPS = 1;
  const getSpeedIcon = () => {
    switch (speed) {
      case SLOW_STEPS:
        return <SignalCellularAlt1BarIcon />;
      case MEDIUM_STEPS:
        return <SignalCellularAlt2BarIcon />;
      case FAST_STEPS:
        return <SignalCellularAltIcon />;
      default:
        return <>Error</>;
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

export default React.memo(ControlButtons);
