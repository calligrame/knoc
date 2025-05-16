<<<<<<< HEAD
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
=======
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
>>>>>>> 9e93d89b4a60728fec32a096490f78eea34d0fb1
