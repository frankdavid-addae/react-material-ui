import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CustomCard from "../../components/common/custom_card/CustomCard";
import SearchBar from "../../components/common/search_bar/SearchBar";
import CustomButton from "../../components/common/custom_button/CustomButton";
import GridWrapper from "../../components/common/grid_wrapper/GridWrapper";
import { cardHeaderStyles } from "./styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import NewUserModal from "../../components/modals/NewUserModal";

const Authentication = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchResults, setSearchResults] = useState(users);

  const getHeader = () => {
    const handleSearch = (value) => {
      filterData(value);
    };

    const filterData = (value) => {
      const lowercasedValue = value.toLowerCase().trim();
      if (lowercasedValue === "") setUsers(searchResults);
      else {
        const filteredData = searchResults.filter((item) => {
          return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setUsers(filteredData);
      }
    };

    const addUser = () => {
      setOpen(true);
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event) => handleSearch(event.target.value)}
          searchBarWidth="700px"
        />
        <Box>
          <CustomButton
            variant="contained"
            size="large"
            sx={cardHeaderStyles.addUserButton}
            onClick={addUser}
          >
            Add user
          </CustomButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const addNewUser = (data) => {
    users.push({ ...data });
    setOpen(false);
  };

  const getContent = () => (
    <>
      {users.length ? (
        users.map((user) => (
          <Box sx={{ marginBottom: "20px" }}>
            <Typography>User ID: {user.userId}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone Number: {user.phoneNumber}</Typography>
          </Box>
        ))
      ) : (
        <Typography
          align="center"
          sx={{
            margin: "40px 16px",
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "1.3rem",
          }}
        >
          No users for this project yet
        </Typography>
      )}
    </>
  );

  return (
    <GridWrapper>
      <CustomCard header={getHeader()} content={getContent()} />
      <NewUserModal
        open={open}
        onClose={() => setOpen(false)}
        addNewUser={addNewUser}
      />
    </GridWrapper>
  );
};

export default Authentication;
