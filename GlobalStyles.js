// GlobalStyles.js
import { StyleSheet } from 'react-native';

export const FontFamily = {
  poppinsMedium: "Poppins-Medium",
  poppinsRegular: "Poppins-Regular",
  poppinsBold: "Poppins-Bold",
};

export const FontSize = {
  size_smi: 13,
  size_3xs: 10,
};

export const Color = {
  colorDarkgray: "#a4a4a4",
  colorWhite: "#fff",
  colorSilver: "#b6b6b6",
};

export const GlobalStyles = StyleSheet.create({
  fontPoppinsMedium: {
    fontFamily: FontFamily.poppinsMedium,
  },
  fontPoppinsRegular: {
    fontFamily: FontFamily.poppinsRegular,
  },
  fontPoppinsBold: {
    fontFamily: FontFamily.poppinsBold,
  },
  fontSizeSmi: {
    fontSize: FontSize.size_smi,
  },
  fontSize3xs: {
    fontSize: FontSize.size_3xs,
  },
  colorDarkgray: {
    color: Color.colorDarkgray,
  },
  colorWhite: {
    color: Color.colorWhite,
  },
  colorSilver: {
    color: Color.colorSilver,
  },
});