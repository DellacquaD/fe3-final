import axios from "axios";
import { grey, blue, red } from "@mui/material/colors";
import { createContext, useReducer, useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from "react";

export const GlobalContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return {...state, Dark: !state.Dark};
    case "data":
      return {...state, data: action.payload};

    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const initialState = {Dark: false, data: []}
  const [state, dispatch] = useReducer(reducer, initialState);
  const [checkFavorite, setCheckFavorite] = useState(true)

  const theme = createTheme({
    palette:{
      mode: (state.Dark ? 'dark' : 'light'),
      primary: {
        main: (state.Dark ? grey[600]: blue[400]),
        contrastText: (state.Dark ? "#ffffff": "#000000")
      },
      secondary:{
        main: (state.Dark ? grey[900] : red[400]),
        contrastText: (state.Dark ? "#ffffff": "#000000")
      },
    }
  });

  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(
      res => {
        dispatch({type: "data" , payload: res.data})
      }
    )
  }

  useMemo(() => getData(), [])

  const store = {
    state,
    dispatch,
    setCheckFavorite,
    checkFavorite
  };
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <GlobalContext.Provider value={store}>
      {children}
    </GlobalContext.Provider>
    </ThemeProvider>
  )
}