import { getFavStorage } from "./functions"
import { green, grey } from "@mui/material/colors";
import { createContext, useReducer, useEffect } from "react";
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';


export const GlobalContext = createContext(undefined);


const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return {...state, Dark: !state.Dark};
    case "data":
      return {...state, data: action.payload};
    case "fav":
      return {...state, fav: action.payload}
    case "arrayFavorite":
      return {...state, fav2render: action.payload} 
    default:
      return state;
    }
  }
  
  export const ContextProvider = ({ children }) => {
  const initialState = {Dark: false, data: [], fav: true, fav2render: []}
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const theme = createTheme({
    palette:{
      mode: (state.Dark ? 'dark' : 'light'),
      primary: {
        main: (state.Dark ? grey[600] : green[300 ]),
        contrastText: "#ffffff",
      },
      secondary:{
        main: (state.Dark ? green[600] : grey[800]),
        contrastText: "#ffffff"
      },
      error: {
        main: (state.Dark ? grey[100] : grey[800]),
        contrastText: "#ffffff"
      },
      succes: {
        main: (state.Dark ? green[300] : green[500]),
      },
      info: {
        main: (state.Dark ? grey[900] : grey[200]),
      }
    },
  });
  

  useEffect(() => {
    const fav2render = getFavStorage();
    dispatch({type: "arrayFavorite", payload: fav2render })
  }, [state.fav])
  
  
  const store = {
    state,
    dispatch,
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