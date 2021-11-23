import { RootState, useThree } from "@react-three/fiber";
import React from "react";

interface ThreeStateProps {
  stateChange: (state: RootState) => any;
}

const SetThreeState: React.FC<ThreeStateProps> = ({ stateChange }) => {
  useThree((state) => stateChange(state));

  return <></>;
};

export default SetThreeState;
