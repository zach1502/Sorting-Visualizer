import { Button, ButtonGroup } from "@mui/material";

function StepButtons({ stepReset, stepBackward, stepForward }) {
  return (
    <ButtonGroup variant="contained" aria-label="Step button group">
      <Button onClick={stepReset}>Reset</Button>
      <Button onClick={stepBackward}>Step Backwards</Button>
      <Button onClick={stepForward}>Step Forward</Button>
    </ButtonGroup>
  );
}

export default StepButtons;