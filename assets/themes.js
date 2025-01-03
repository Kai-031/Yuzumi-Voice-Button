import colors from 'vuetify/es5/util/colors';

export default {
  light: {
    primary: '#ffb267',
    secondary: '#777777',
    'title-text': '#000000',
    background: '#ffefe1',
    'category-background': '#ffffff',
    'btn-text': '#000000',
    accent: colors.blue.lighten2,
    error: colors.deepOrange.base,
    warning: colors.orange.base,
    info: colors.blueGrey.base,
    success: colors.teal.base
  },
  dark: {
    primary: '#fd8d4e',
    secondary: colors.grey.grey,
    'title-text': '#e0e0e0',
    background: '#121212',
    'category-background': '#1e1e1e',
    'btn-text': '#e0e0e0',
    accent: colors.lightBlue.darken4,
    error: colors.deepOrange.accent4,
    warning: colors.amber.base,
    info: colors.teal.lighten1,
    success: colors.green.accent3
  }
};
