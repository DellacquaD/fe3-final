import { createContext, useReducer, useMemo } from "react";
import { createTheme } from '@mui/material';
import { grey, blue, red } from "@mui/material/colors";
import axios from "axios";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const ContextGlobal = createContext();

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "theme":
      return {...state, prefersDark: !state.prefersDark};
    case "data":
      return {...state, data: action.payload};
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const initialState = {prefersDark: false, data: []}
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const theme = createTheme({
    palette:{
      mode: (state.prefersDark ? 'dark' : 'light'),
      primary: {
        main: (state.prefersDark ? grey[500]: blue[500]),
      },
      secondary:{
        main: (state.prefersDark ? grey[900] : red[400]),

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
    dispatch
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <ContextGlobal.Provider value={store}>
      {children}
    </ContextGlobal.Provider>
    </ThemeProvider>
  )
}