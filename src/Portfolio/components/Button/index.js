import React from "react";
import colors from "../../config/colors";
import { ButtonContainer, ButtonSpacer } from "./styles";

function Button({
  text,
  onClick = () => { },
  variant = "primary",
  formState = "unsent",
  disabled = false,
  type="none",
}) {
  let buttonColors = {
    "primary": {
      backgroundColor: colors.primary,
      color: colors.shade
    },
    "secondary": {
      backgroundColor: colors.shade,
      color: colors.primary
    },
    "disabled": {
      backgroundColor: colors.text + "22",
      color: colors.background
    }
  }
  let { color, backgroundColor } = buttonColors[disabled ? "disabled" : variant];
  return <ButtonContainer
    disabled={disabled}
    color={color}
    backgroundColor={backgroundColor}
    onClick={() => {
      !disabled && onClick();
    }}
  >
    {
      formState === "sending" ? <svg width={15} height={15} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="translate(84,50)">
          <g transform="rotate(0)">
            <circle cx="0" cy="0" r="6" fill={color} fillOpacity="1">
              <animateTransform attributeName="transform" type="scale" begin="-0.9s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
              <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.9s"></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(77.5065778087482,69.98469857794409)">
          <g transform="rotate(36)">
            <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.9">
              <animateTransform attributeName="transform" type="scale" begin="-0.8s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
              <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.8s"></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(60.50657780874821,82.33592155403522)">
          <g transform="rotate(72)">
            <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.8">
              <animateTransform attributeName="transform" type="scale" begin="-0.7s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
              <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.7s"></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(39.49342219125179,82.33592155403522)">
          <g transform="rotate(108)">
            <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.7">
              <animateTransform attributeName="transform" type="scale" begin="-0.6s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
              <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.6s"></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(22.493422191251792,69.98469857794409)">
          <g transform="rotate(144)">
            <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.6">
              <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
              <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(16,50)">
          <g transform="rotate(180)">
            <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.5">
              <animateTransform attributeName="transform" type="scale" begin="-0.4s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
              <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.4s"></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(22.49342219125179,30.015301422055916)">
          <g transform="rotate(216)">
            <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.4">
              <animateTransform attributeName="transform" type="scale" begin="-0.3s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
              <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.3s"></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(39.49342219125178,17.664078445964783)">
          <g transform="rotate(252)">
            <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.3">
              <animateTransform attributeName="transform" type="scale" begin="-0.2s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
              <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.2s"></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(60.506577808748204,17.664078445964776)">
          <g transform="rotate(288)">
            <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.2">
              <animateTransform attributeName="transform" type="scale" begin="-0.1s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
              <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.1s"></animate>
            </circle>
          </g>
        </g>
        <g transform="translate(77.5065778087482,30.015301422055906)">
          <g transform="rotate(324)">
            <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.1">
              <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
              <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
            </circle>
          </g>
        </g>
      </svg> : formState === "unsent" ? <svg width={15} height={15} viewBox="0 0 15 15" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.9072 0.0517827L1.27515 2.9598C-0.270875 3.34631 -0.463867 5.46538 0.986891 6.12484L4.57079 7.75389C5.30556 8.08783 6.10095 8.2085 6.87389 8.12615C6.79155 8.8991 6.91213 9.69446 7.24615 10.4292L8.8752 14.0131C9.53468 15.4639 11.6537 15.2709 12.0402 13.7249L14.9482 2.09279C15.2564 0.860159 14.1399 -0.256374 12.9072 0.0517827ZM5.19143 6.38844C5.89416 6.70791 6.68071 6.73228 7.38503 6.48248C7.65126 6.38807 7.9057 6.25443 8.13945 6.08277C8.172 6.05885 8.20417 6.03418 8.23589 6.00883L9.95231 4.63568C10.2255 4.41713 10.5829 4.77455 10.3643 5.04773L8.99121 6.76415C8.96579 6.79587 8.94119 6.82804 8.91727 6.86059C8.74561 7.09434 8.61198 7.34879 8.51756 7.61501C8.26769 8.31933 8.29214 9.10585 8.61153 9.8086L10.2406 13.3925C10.3124 13.5504 10.5431 13.5294 10.5852 13.3611L13.4932 1.72903C13.5267 1.59484 13.4052 1.47329 13.271 1.50684L1.63892 4.41486C1.4706 4.45693 1.4496 4.68762 1.60753 4.75941L5.19143 6.38844Z" fill={colors.background} />
      </svg>:<svg width={15} height={15} viewBox="0 0 17 13" fill="none">
      <path d="M1 6.71986L5.64019 11.3598L16 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>}
    <ButtonSpacer />
    {text}
  </ButtonContainer>;
}
export default Button;