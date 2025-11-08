// /**
//  * @fileoverview Main application logic, including initialization,
//  * navigation handling, and login event listener.
//  */

// import { handleLogin } from "./Auth.js";

// $(document).ready(function () {
//   // --- Initial Setup ---
//   // Ensure main content is hidden and login is shown on initial load (redundant check, but safe)
//   $("#main-content").hide();
//   $("#login-page").show();

//   // --- Login Form Submission Handler ---
//   $("#login-form").submit(function (e) {
//     e.preventDefault();

//     const username = $("#username").val().trim();
//     const password = $("#password").val().trim();

//     // Delegate the actual login logic to the auth module
//     handleLogin(username, password);
//   });

//   // --- Navigation Logic (Handles switching between Home, Customer, Item, Order) ---
//   $(".nav-link, .navbar-brand").click(function (e) {
//     e.preventDefault();

//     // 1. Remove active class from all nav links
//     $(".nav-link").removeClass("active");

//     const target = $(this).data("target");

//     // 2. Set the appropriate link as active
//     if (target === "home-page") {
//       // If clicking the brand or home link, explicitly set the Home link as active
//       $('.nav-link[data-target="home-page"]').addClass("active");
//     } else {
//       // For other pages (Customer, Item, Order), set the clicked link as active
//       $(this).addClass("active");
//     }

//     // 3. Hide all page sections
//     $(".page").hide();

//     // 4. Show the targeted page with a fade effect
//     $(`#${target}`).fadeIn(500);
//   });
// });
