import {
  List,
  ListItem,
  Typography,
  //   NavListMenu,
} from "@material-tailwind/react";
import { NavListMenu } from "./NavListMenu";

export const NavList = () => {
  return (
    <List className="mt-4 mb-6 p-0 gap-2 lg:mt-0 lg:mb-0 lg:flex-row lg:p-0">
      {/* Home */}
      <Typography
        as="a"
        href="#"
        variant="small"
        color="gray"
        className="font-semibold"
      >
        <ListItem className="flex hover:!rounded-full items-center gap-2 py-2 pr-4">
          Home
        </ListItem>
      </Typography>
      {/* menu list */}
      <NavListMenu />
      {/* contacto */}
      <Typography
        as="a"
        href="#"
        variant="small"
        color="gray"
        className="font-semibold"
      >
        <ListItem className="flex hover:!rounded-full items-center gap-2 py-2 pr-4">
          Contacto
        </ListItem>
      </Typography>

      {/* faqs */}
      <Typography
        as="a"
        href="#"
        variant="small"
        color="gray"
        className="font-semibold"
      >
        <ListItem className="flex hover:!rounded-full items-center gap-2 py-2 pr-4">
          FAQs
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="gray"
        className="font-semibold"
      >
        <ListItem className="flex hover:!rounded-full transition-all ease-in-out items-center gap-2 py-2 pr-4">
          Videos
        </ListItem>
      </Typography>
    </List>
  );
};
