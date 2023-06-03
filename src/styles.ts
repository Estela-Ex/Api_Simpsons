import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    palette: {
      primary: {
        main: '#70D1FE'
      },
      secondary:{
        main:'#FE0F35'
      }
    },
    typography:{
      fontFamily:[
        '"Homer Simpson Revised"'
      ].join(",")
    }
  });