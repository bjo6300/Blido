type PresentationFormType = {
  title: string;
  startAtDay: string;
  startAtTime: string;
  endAtDay: string;
  endAtTime: string;
};

export const isValidatePresentationForm = (
  presentationForm: PresentationFormType
) => {
  for (const value of Object.values(presentationForm)) {
    if (value === "") return true;
  }
  return false;
};