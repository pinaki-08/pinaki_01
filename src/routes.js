import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdLocalMovies,
  MdHealthAndSafety,
  MdHourglassBottom,
  MdMonetizationOn,
  MdModeOfTravel,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";

import NFTMarketplace from "views/admin/marketplace";
import Travel from "views/admin/Travel";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
// import Exercise from "views/admin/marketplace";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import Articles from "views/admin/articles";

const routes = [
  {
    name: "Goals",
    layout: "/admin",
    path: "/default",
    icon: (
      <Icon as={MdHourglassBottom} width="20px" height="20px" color="inherit" />
    ),
    component: MainDashboard,
  },

  {
    name: "Health & Wellness",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon as={MdHealthAndSafety} width="20px" height="20px" color="inherit" />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Lifestyle & Entertainment",
    layout: "/admin",
    icon: (
      <Icon as={MdLocalMovies} width="20px" height="20px" color="inherit" />
    ),
    path: "/data-tables",
    component: DataTables,
  },

  {
    name: "Finance",
    layout: "/admin",
    path: "/finance",
    icon: (
      <Icon as={MdMonetizationOn} width="20px" height="20px" color="inherit" />
    ),
    component: RTL,
  },
  {
    name: "Travel",
    layout: "/admin",
    path: "/travel",
    icon: (
      <Icon as={MdModeOfTravel} width="20px" height="20px" color="inherit" />
    ),

    component: Travel,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },

  {
    name: "Article",
    layout: "/article",
    path: "/article/:id",
    component: Articles,
  },
];

export default routes;
