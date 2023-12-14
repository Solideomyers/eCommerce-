import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
export const NavListMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // const navListMenuItems = [
  //   {
  //     title: "Products",
  //     description: "Find the perfect solution for your needs.",
  //     icon: SquaresPlusIcon,
  //   },
  //   {
  //     title: "About Us",
  //     description: "Meet and learn about our dedication",
  //     icon: UserGroupIcon,
  //   },
  //   {
  //     title: "Blog",
  //     description: "Find the perfect solution for your needs.",
  //     icon: Bars4Icon,
  //   },
  //   {
  //     title: "Services",
  //     description: "Learn how we can help you achieve your goals.",
  //     icon: SunIcon,
  //   },
  //   {
  //     title: "Support",
  //     description: "Reach out to us for assistance or inquiries",
  //     icon: GlobeAmericasIcon,
  //   },
  //   {
  //     title: "Contact",
  //     description: "Find the perfect solution for your needs.",
  //     icon: PhoneIcon,
  //   },
  //   {
  //     title: "News",
  //     description: "Read insightful articles, tips, and expert opinions.",
  //     icon: NewspaperIcon,
  //   },
  //   {
  //     title: "Products",
  //     description: "Find the perfect solution for your needs.",
  //     icon: RectangleGroupIcon,
  //   },
  //   {
  //     title: "Special Offers",
  //     description: "Explore limited-time deals and bundles",
  //     icon: TagIcon,
  //   },
  // ];

  // const renderItems = navListMenuItems.map(
  //   ({ icon, title, description }, key) => (
  //     <a href="#" key={key}>
  //       <MenuItem className="flex items-center gap-3 rounded-full">
  //         <div className="flex items-center justify-center rounded-full !bg-blue-gray-50 p-2 ">
  //           {" "}
  //           {React.createElement(icon, {
  //             strokeWidth: 2,
  //             className: "h-6 text-gray-900 w-6",
  //           })}
  //         </div>
  //         <div>
  //           <Typography
  //             variant="h6"
  //             color="blue-gray"
  //             className="flex items-center text-sm font-bold"
  //           >
  //             {title}
  //           </Typography>
  //           <Typography
  //             variant="paragraph"
  //             className="text-xs !font-medium text-blue-gray-500"
  //           >
  //             {description}
  //           </Typography>
  //         </div>
  //       </MenuItem>
  //     </a>
  //   )
  // );

  const navListMenuItems = [
    {
      title: "Products",
      description: "Find the perfect solution for your needs.",
      icon: SquaresPlusIcon,
    },
    {
      title: "About Us",
      description: "Meet and learn about our dedication",
      icon: UserGroupIcon,
    },
    {
      title: "Blog",
      description: "Find the perfect solution for your needs.",
      icon: Bars4Icon,
    },
    {
      title: "Services",
      description: "Learn how we can help you achieve your goals.",
      icon: SunIcon,
    },
    {
      title: "Support",
      description: "Reach out to us for assistance or inquiries",
      icon: GlobeAmericasIcon,
    },
    {
      title: "Contact",
      description: "Find the perfect solution for your needs.",
      icon: PhoneIcon,
    },
    {
      title: "News",
      description: "Read insightful articles, tips, and expert opinions.",
      icon: NewspaperIcon,
    },
    {
      title: "Products",
      description: "Find the perfect solution for your needs.",
      icon: RectangleGroupIcon,
    },
    {
      title: "Special Offers",
      description: "Explore limited-time deals and bundles",
      icon: TagIcon,
    },
  ];

  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-full">
          <div className="flex items-center justify-center rounded-full !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex bg-blue/90 items-center gap-2 py-2 pr-4 font-medium text-white rounded-full"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Servicios
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0 ">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block rounded-lg lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
};
