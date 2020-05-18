import React, { useContext } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { ThemeContext } from "styled-components";
import { SketchPicker } from "react-color";

const presetColors = [
  // Spot Colours
  "#4f7f37",
  "#297d79",
  "#006789",
  "#2e2a7e",
  "#a6ca63",
  "#aad9d6",
  "#79b4c6",
  "#5e79a9",
  // Corporate Identity Colours
  "#95c11d",
  "#212a72",
  // Research Area Colours
  "#ea5a01",
  "#2992d0",
  "#3db498",
  "#831f82",
  "#c6c6c6",
];

const ThemePicker = ({ setTheme }) => {
  const theme = useContext(ThemeContext);
  const { primary, background } = theme;

  const handlePrimaryChange = (color) => {
    setTheme({ primary: color.hex, background });
  };

  const handleBackgroundChange = (color) => {
    setTheme({ primary, background: color.hex });
  };

  return (
    <div className={"ml-2"}>
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id="theme-picker" style={{ width: 300 }}>
            <Popover.Title as="h3">Theme</Popover.Title>
            <Popover.Content className={"p-3"}>
              <div className={"mb-3"}>
                <h6 className={"f-semi-bold"}>Primary color:</h6>
                <SketchPicker
                  color={theme.primary}
                  onChange={handlePrimaryChange}
                  presetColors={presetColors}
                  width={225}
                />
              </div>
              <div>
                <h6 className={"f-semi-bold"}>Background color:</h6>
                <SketchPicker
                  color={theme.background}
                  onChange={handleBackgroundChange}
                  presetColors={presetColors}
                  width={225}
                />
              </div>
            </Popover.Content>
          </Popover>
        }
      >
        <div className={"theme-picker"} title={"Edit Theme"} />
      </OverlayTrigger>
    </div>
  );
};

export default ThemePicker;
