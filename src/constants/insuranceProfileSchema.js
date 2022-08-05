import * as VALIDATOR_MSG from "./formValidationMessage";
import * as Yup from "yup";
import { getDefaultString, getDefaultDate } from "../utils";

export default function getInsuranceProfileInitializeValue(props) {
  return {
    myEmail: getDefaultString(props.insuranceProfile, "myEmail"),
    myFirstName: getDefaultString(props.insuranceProfile, "myFirstName"),
    myMiddleName: getDefaultString(props.insuranceProfile, "myMiddleName"),
    myLastName: getDefaultString(props.insuranceProfile, "myLastName"),
    step: props.step + 1,
    myBirthday: new Date(getDefaultDate(props.insuranceProfile, "myBirthday"))
      .toISOString()
      .split("T")[0],
    myIDCard: getDefaultString(props.insuranceProfile, "myIDCard"),
    myPhoneNumber: getDefaultString(props.insuranceProfile, "myPhoneNumber"),
    myMonthlySaving: getDefaultString(
      props.insuranceProfile,
      "myMonthlySaving"
    ),
  };
}
export const INSURANCE_PROFILE_SCHEMA = Yup.object().shape({
  myFirstName: Yup.string()
    .min(2, VALIDATOR_MSG.FIRST_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.FIRST_NAME_TOO_LONG)
    .required(VALIDATOR_MSG.REQUIRED),
  myMiddleName: Yup.string()
    .min(2, VALIDATOR_MSG.MIDDLE_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.MIDDLE_NAME_TOO_LONG)
    .optional(),
  myLastName: Yup.string()
    .min(2, VALIDATOR_MSG.LAST_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.LAST_NAME_TOO_LONG)
    .required(VALIDATOR_MSG.REQUIRED),
  myEmail: Yup.string()
    .email(VALIDATOR_MSG.EMAIL_INVALID)
    .required(VALIDATOR_MSG.REQUIRED),
  myBirthday: Yup.date(),
  myIDCard: Yup.number()
    .typeError(VALIDATOR_MSG.ID_CARD_DIGIT_ONLY)
    .integer(VALIDATOR_MSG.ID_CARD_DIGIT_ONLY)
    .min(99999999, VALIDATOR_MSG.ID_CARD_INVALID)
    .max(999999999999, VALIDATOR_MSG.ID_CARD_INVALID)
    .required(VALIDATOR_MSG.REQUIRED),
  myPhoneNumber: Yup.string()
    .required(VALIDATOR_MSG.REQUIRED)
    .min(9, VALIDATOR_MSG.PHONE_INVALID),
  myMonthlySaving: Yup.number()
    .typeError(VALIDATOR_MSG.MONTHLY_SAVING_DIGIT_ONLY)
    .moreThan(0, VALIDATOR_MSG.MONTHLY_SAVING_INVALID)
    .required(VALIDATOR_MSG.REQUIRED),
});
