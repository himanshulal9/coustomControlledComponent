const NavDrawer = [
  {
    label: "Dashboard",
    labelIcon: "fa fa-snowflake-o",
    link: "/dashboard",
    dropDown: false,
    dropdownData: [],
  },
  {
    label: "Gym Profile",
    labelIcon: "fa fa-vcard-o ",
    link: "/gymprofile",
    dropDown: false,
    dropdownData: [],
  },
  // users
  {
    label: "User",
    labelIcon: "fa fa-user",
    link: "",
    dropDown: true,
    dropdownData: [
      {
        label: "Add User",
        labelIcon: "fa fa-user-plus",
        link: "/users/addUser",
      },
      {
        label: "Active User",
        labelIcon: "fa fa-user-plus",
        link: "/users/activeUser",
      },
      {
        label: "Due User",
        labelIcon: "fa fa-user-secret",
        link: "/users/dueUser",
      },
      {
        label: "Deactive User",
        labelIcon: "fa fa-user-times",
        link: "/users/deactiveUser",
      },
      {
        label: "Attendance",
        labelIcon: "fa fa-calendar-plus-o",
        link: "/users/attendance",
      },
    ],
  },
  // staffs
  {
    label: "Staffs",
    labelIcon: "fa fa-slack",
    link: "",
    dropDown: true,
    dropdownData: [
      {
        label: "Add staff",
        labelIcon: "fa fa-arrows",
        link: "/staff/addstaff",
      },
      {
        label: "Active staff",
        labelIcon: "fa fa-check",
        link: "/staff/activestaff",
      },
      {
        label: "Due staff",
        labelIcon: "fa fa-exclamation",
        link: "/staff/duestaff",
      },
      {
        label: "Deactive staff",
        labelIcon: "fa fa-ban",
        link: "/staff/deactiveUser",
      },
      {
        label: "Attendance",
        labelIcon: "fa fa-calendar-plus-o",
        link: "/users/attendance",
      },
    ],
  },
  // Subscription
  {
    label: "Subscription",
    labelIcon: "fa fa-superpowers",
    link: "",
    dropDown: true,
    dropdownData: [
      {
        label: "Overview",
        labelIcon: "fa fa-dashcube",
        link: "/subscription/overview",
      },
      {
        label: "Add Subscription",
        labelIcon: "fa fa-plus-square",
        link: "/subscription/add_subscription",
      },
      {
        label: "Edit Subscription",
        labelIcon: "fa fa-pencil-square-o ",
        link: "/subscription/edit_subscription",
      },
    ],
  },
  // Message
  {
    label: "Message",
    labelIcon: "fa fa-envelope-o ",
    link: "",
    dropDown: true,
    dropdownData: [
      {
        label: "Overview",
        labelIcon: "fa fa-dashcube",
        link: "/message/overview",
      },
      {
        label: "User message",
        labelIcon: "fa fa-envelope-open",
        link: "/message/user_message",
      },
      {
        label: "Staff message",
        labelIcon: "fa fa-envelope-open",
        link: "/message/staff_message",
      },
    ],
  },
  // Revenu
  {
    label: "Revenu",
    labelIcon: "fa fa-inr ",
    link: "",
    dropDown: true,
    dropdownData: [
      {
        label: "Overview",
        labelIcon: "fa fa-dashcube",
        link: "/revenu/overview",
      },
      {
        label: "Payment Receive",
        labelIcon: "fa fa-credit-card",
        link: "/revenu/payment_received",
      },
      {
        label: "Payment Made",
        labelIcon: "fa fa-credit-card-alt",
        link: "/revenu/payment_made",
      },
      {
        label: "Incomes",
        labelIcon: "fa fa-money",
        link: "/revenu/income",
      },
    ],
  },
  // Services
  {
    label: "Services",
    labelIcon: "fa fa-server",
    link: "",
    dropDown: true,
    dropdownData: [
      {
        label: "Overview",
        labelIcon: "fa fa-dashcube",
        link: "/services/overview",
      },
      {
        label: "Add services",
        labelIcon: "fa fa-plus-square",
        link: "/services/add_services",
      },
      {
        label: "Remove services",
        labelIcon: "fa fa-minus-square",
        link: "/services/remove_services",
      },
    ],
  },
  // Notification
  {
    label: "Notification",
    labelIcon: "fa fa-bell",
    link: "/notification",
    dropDown: false,
    dropdownData: [],
  },
  // chats
  {
    label: "Chats",
    labelIcon: "fa fa-comments",
    link: "",
    dropDown: true,
    dropdownData: [
      {
        label: "Users",
        labelIcon: "fa fa-users",
        link: "/chats/users",
      },
      {
        label: "staffs",
        labelIcon: "fa fa-slack",
        link: "/chats/staffs",
      },
      {
        label: "cloudygym",
        labelIcon: "fa fa-envelope-open",
        link: "/chats/cloudygym_supports",
      },
    ],
  },
  // webBlog

  {
    label: "WebBlog",
    labelIcon: "fa fa-th-large",
    link: "",
    dropDown: true,
    dropdownData: [
      {
        label: "setting",
        labelIcon: "fa fa-cogs",
        link: "/webblog/setting",
      },
    ],
  },
  // store
  {
    label: "Store",
    labelIcon: "fa fa-shopping-cart",
    link: "",
    dropDown: true,
    dropdownData: [
      {
        label: "Add Item",
        labelIcon: "fa fa-add",
        link: "/store/addItem",
      },
    ],
  },
  // logout
  {
    label: "logout",
    labelIcon: "fa fa-bell",
    link: "/Logout",
    dropDown: false,
    dropdownData: [],
  },
  // {label,labelIcon,link, dropDown, dropdownData}
];
export default NavDrawer;
