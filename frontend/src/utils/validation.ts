export const isValidatePresentationForm = (presentationForm: string[]) => {
    for (const value of presentationForm) {
      if (value === "") return true;
    }
    return false;
  };