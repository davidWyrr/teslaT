## Project Title: Dave App

This project is a simple application based on a Figma design. from the infomation on the figma design and my understanding of it , this application allow tracking of user , tracking of activities using custom filter components and also display relevant graphical representation of data regarding the activities, user leaderboard and so.on

**Ideas and Planning:**

I aimed to create a lightweight and user-friendly app that aligns well with the figma design and also has a well stuctured reusable component and clean UI. I explored using Vuetify for component styling and animation
**Execution:**
The application is structured with seperate components for dropdown to better align with the design and also display my expertise with Vue.js . Data is managed using ref and reactive for state management since it is small project . grapical representations of data are implemented using apexChart ( an open source javascript chart library licensed under MIT)

**Setup Instructions:**

 **Prerequisites:** Node.js v16 or later

 **Installation:**
1. git clone https://github.com/davidWyrr/teslaT.git
2. cd tesla2
3. npm install
4. npm run dev# tesla2

**Areas for improvement:**

1.  modification of the people Module to better align with the company's Goal.
2.  Add filtering and search options for the People Module.
3.  Integrate with a backend API for persistence and user accounts.
4. some of the images exported from the figma  are more than 5mb (will affect performance in the long run )
