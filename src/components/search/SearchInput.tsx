import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { CloseRounded } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  display: "flex",
  flexShrink: 2,

  width: "100%",
  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchInput: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(
      (prevState) => (setPrevSearchTerm(prevState), event.target.value)
    );
  };

  const clearSearchingTerm = (): void => {
    setSearchTerm("");
  };

  useEffect(() => {
    if (!location.search && !searchTerm) {
      navigate({ pathname: "/" }, { replace: true });
    } else if (searchTerm === "" && location.pathname === "/search") {
      navigate(-1);
    } else if (searchTerm.length > 0 && prevSearchTerm === "") {
      navigate({ pathname: "/search", search: `?s=${searchTerm}` });
    } else if (searchTerm !== "" && prevSearchTerm !== "") {
      navigate({ search: `?s=${searchTerm}` }, { replace: true });
    } else if (searchTerm === "") {
      return;
    }
  }, [searchTerm]);

  return (
    <>
      {/* <button onClick={() => console.log(prevSearchTerm)}>xd</button> */}
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          key="searchingTerm"
          placeholder="Szukaj..."
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearchTerm}
          value={searchTerm}
        />
        {searchTerm ? (
          <IconButton onClick={clearSearchingTerm}>
            <CloseRounded />
          </IconButton>
        ) : null}
      </Search>
    </>
  );
};

export default SearchInput;

{
  /* <Paper
component="form"
sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "20%" }}
>
<Box sx={{ p: "5px 10px" }}>
  <SearchIcon />
</Box>
<InputBase
  sx={{ ml: 1, flex: 1 }}
  key="searchingTerm"
  placeholder="Szukaj..."
  inputProps={{ "aria-label": "search" }}
  onChange={handleSearchTerm}
  value={searchTerm}
/>
</Paper> */
}
