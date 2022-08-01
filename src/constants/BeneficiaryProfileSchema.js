import * as VALIDATOR_MSG from "./formValidationMessage";
import * as Yup from "yup";
import { getDefaultString, getDefaultDate } from "../utils";

export default function getBeneficiaryProfileInitializeValue(props) {
  return {
    hisEmail: getDefaultString(props.beneficiaryProfile, "hisEmail"),
    hisFirstName: getDefaultString(props.beneficiaryProfile, "hisFirstName"),
    hisMiddleName: getDefaultString(props.beneficiaryProfile, "hisMiddleName"),
    hisLastName: getDefaultString(props.beneficiaryProfile, "hisLastName"),
    step: props.step + 1,
    hisBirthday: new Date(
      getDefaultDate(props.beneficiaryProfile, "hisBirthday")
    )
      .toISOString()
      .split("T")[0],
    hisIDCard: getDefaultString(props.beneficiaryProfile, "hisIDCard"),
    hisPhoneNumber: getDefaultString(
      props.beneficiaryProfile,
      "hisPhoneNumber"
    ),
    hisRelationshipWithMe: getDefaultString(
      props.beneficiaryProfile,
      "hisRelationshipWithMe"
    ),
  };
}
export const BENEFICIARY_PROFILE_SCHEMA = Yup.object().shape({
  hisFirstName: Yup.string()
    .min(2, VALIDATOR_MSG.FIRST_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.FIRST_NAME_TOO_LONG)
    .required(VALIDATOR_MSG.REQUIRED),
  hisMiddleName: Yup.string()
    .min(2, VALIDATOR_MSG.MIDDLE_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.MIDDLE_NAME_TOO_LONG)
    .optional(),
  hisLastName: Yup.string()
    .min(2, VALIDATOR_MSG.LAST_NAME_TOO_SHORT)
    .max(50, VALIDATOR_MSG.LAST_NAME_TOO_LONG)
    .required(VALIDATOR_MSG.REQUIRED),
  hisEmail: Yup.string()
    .email(VALIDATOR_MSG.EMAIL_INVALID)
    .required(VALIDATOR_MSG.REQUIRED),
  hisBirthday: Yup.date(),
  hisIDCard: Yup.number()
    .typeError(VALIDATOR_MSG.ID_CARD_DIGIT_ONLY)
    .integer(VALIDATOR_MSG.ID_CARD_DIGIT_ONLY)
    .min(99999999, VALIDATOR_MSG.ID_CARD_INVALID)
    .max(999999999999, VALIDATOR_MSG.ID_CARD_INVALID)
    .required(VALIDATOR_MSG.REQUIRED),
  hisPhoneNumber: Yup.string()
    .required(VALIDATOR_MSG.REQUIRED)
    .min(9, VALIDATOR_MSG.PHONE_INVALID),
  hisRelationshipWithMe: Yup.string().required(VALIDATOR_MSG.REQUIRED),
});
