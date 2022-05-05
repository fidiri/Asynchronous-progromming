The application fetches student list from https://api.hatchways.io/assessment/students 
 What does the application do?
1-renders each student profile with info such as name, picture, email, skill and average
2-user can filter profiles based on name as well as tags
3-user can also click on single student profile to see tags
4-user can also add multiple tags to the student profile

How does the application behave?
1-the application fetches data once at start and calculates average to store it in main data store
2-the tags are saved in memory, so refreshing the app deletes that data
3-the search filter is made using or condition between first name, last name, and tags. It can quickly convert to and.

Probable Enhancements:
- Storing tag data in localStorage, which will be saved when user adds it. So it could be fetched on subsequent refreshes and shown to the user.
- Adding unit tests for each component for better code coverage

Available scripts:
In the project directory we can run: 
npm start: it runs the application 
open http://localhost:3000 to view in the browser
The page will reload if any edits were made
