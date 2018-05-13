// Styleguide theme
const color = {
  base: '#333',
  light: '#767676',
  lightest: '#ccc',
  link: '#4286f4',
  linkHover: '#f28a25',
  border: '#e8e8e8',
  name: '#7f9a44',
  type: '#b77daa',
  error: '#c00',
  baseBackground: '#fff',
  codeBackground: '#f5f5f5',
  sidebarBackground: '#f5f5f5',
  ribbonBackground: '#f9970d',
  ribbonText: '#fff',
};

const heading = () => ({
  heading: {
    margin: 0,
    color: '#f44842',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Roboto"',
      '"Oxygen"',
      '"Ubuntu"',
      '"Cantarell"',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'sans-serif',
    ],
    fontWeight: 'normal',
  },
  heading1: {
    fontSize: 55,
  },
  heading2: {
    fontSize: 45,
  },
  heading3: {
    fontSize: 30,
  },
  heading4: {
    fontSize: 20,
  },
  heading5: {
    fontSize: 18,
  },
  heading6: {
    fontSize: 16,
  },
});

// Custom theme
const sidebar = {
  sidebarWidth: '100%',
  sidebarHeight: 200,
};

const content = {
  paddingLeft: 0,
}

// Styleguide and custom theme export
module.exports = {
  color,
  heading,
  sidebar,
  content,
};
