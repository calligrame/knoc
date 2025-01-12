const logoImage = document.querySelector(".logo");
let isWhite = false;
export const updateState = (logoState) => {
  isWhite = logoState;
  updateLogo();
};

const updateLogo = () => {
  if (isWhite) {
    logoImage.classList.add("logo-white");
  } else {
    logoImage.classList.remove("logo-white");
  }
};
