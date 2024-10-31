### **What our project is about:**

## RateMyGym is a web application where users can provide ratings and comments about local gyms regarding many factors such as price, availability of equipment, location, and general environment. RatingMyGym has been built in collaboration with Ruby on Rails but following Object-Oriented guidelines of the MVC architecture. The minimum increased features for security of a login system are implemented, along with a future User Profile page where users will be able to update their account information and update their activity. When the user chooses a gym and leaves a review, the system will add this new review to the creation of the general rating of the gym and the breakdown of reviews for certain ones, since the users can visualize aggregated ratings for factors such as machines, staff, cleanliness, atmosphere, etc. The frontend provides an intuitive interface done via HTML, CSS, and JavaScript; the backend manages user authentication, data storage, and the dynamic showing of information and reviews regarding the gym in a very efficient way. PostgreSQL is used for database management, and best practices were followed in development, including feature tracking and version control through GitHub.


---

### Retrospective for Iteration 2
### Top-level directory layout
# RateMyGym Project

RateMyGym is a web application that allows users to review and rate gyms based on different aspects like equipment quality, staff, and cleanliness.

## Project Directory Layout
**Here is the structure of our project**
This structure/framework was downloaded through the Rails tutorial. Its a self built strcuture. 

- **/app**: main application code.
  - **/assets**: holds static files like images, JavaScript, and CSS.
    - **/config**: This stores configuration files. 
    - **/images**: Contains images for gym logos. 
    - **/stylesheets**: contains CSS files for styling the app.
  - **/channels**: Used for real-time features.
  - **/controllers**: this folder, contains files which takes in user requests, like opening a page, and then directs them into the right place
  - **/helpers**:  assist with view logic/small parts of code makes it easier to display things in views
  - **/jobs**: for background tasks that run on their own, like sending emails. 
  - **/mailers**: for potentially sending email to users
  - **/models**: Defines the app’s data, like gyms, users, and reviews. Think of it as the “structure” for your data.
  - **/views**: Contains HTML files that display content to users. this is what users actually see when they load a page.
    - **/entries**: This folder likely contains HTML templates related to a specific feature in your app (maybe gym entries or listings).
    - **/layouts**: "wrappers" for your pages. It holds the overall structure of the page like the header, footer, and the specific page content is placed inside. 
    - **/pwa**: folder contains files related to making an app, (progressive web app). it can contain files that tells browsers how to display the app on mobile devices. 
- **/bin**: contains executable scripts that help you run, manage, and maintain the application. It holds command line scripts torun in terminal to perform various tasks, like starting rails server, running database migrattions. 
- **/config**: Contains all the settings for the app, like how it connects to the database and routes.
  - **/environments**: Separate settings for development (when you’re building it), production (when it’s live), and test environments.
  - **/initializers**: Setup files for extra features or tools.
  - **/locales**: Files for translations if the app supports multiple languages

- **/db**: Stores the database information.
    - **/migrate**:Files that tell the database how to structure data (like adding tables).
   
- **/log**: Where the app saves records of what’s happening (errors, actions, etc.). This helps with debugging.
- **/public**: Files that users can access directly, like images or error pages.
- **/storage**: SWhere uploaded files are saved (like user-uploaded images).
- **/test**: Contains tests to make sure the code works correctly.
- **/tmp**: Temporary files created while the app is running (not important to edit).
- **/vendor**: Holds any third-party libraries or tools the app depends on.

### Feature Tracking

![Screenshot 2024-10-30 164511](https://github.com/user-attachments/assets/02a23b8e-736c-4e6b-a103-a1ea4306ed7c)

![Screenshot 2024-10-30 164542](https://github.com/user-attachments/assets/c7a355d9-1d14-498c-ae07-4bf7f9fa7ebb)


### What Went Wrong:

  ### Incomplete Feature Development:
  
  - We were unable to implement the filtering through reviews feature, which would have allowed users to sort reviews based on various criteria. Additionally, the likes and dislikes feature was not developed. This hindered our ability to enhance user interaction and engagement with the reviews.
  
  - We were unable to complete the process of placing the 'writing the review section', which is on the review page, on a separate button so that the page's layout looks cleaner. 
  
  ### Review Creation Challenges:
  
  - We faced difficulties in creating a review due to popup error handling. Users encountered messages that were not user-friendly, which affected their ability to submit reviews successfully. We identified these errors and created custom handling to provide clearer feedback to users.
  
  ### Error Handling and User Experience:
  
  - The initial error messages were vague and not presentable, leading to confusion among users. We recognized the need for a better user experience and updated the error handling messages to be more informative and visually appealing.
  
  ### Back Button Issues:
  
  - The back button functionality did not work as intended. After troubleshooting, we discovered that the problem stemmed from incorrect redirection paths. This issue required additional attention to ensure users could seamlessly navigate to previous pages.
  
  ### How We Solved It:
  
  - To address the review creation challenges, we refined the error messages, ensuring they were more descriptive and aligned with user expectations. This change improved the overall user experience when submitting reviews.
  
  - For the back button issue, we reviewed the redirection paths in our application. Once we corrected these paths, users could navigate back without any problems, enhancing the fluidity of their experience on the platform.

### Things to Improve:

  ### Feature Completion:
  
  - Prioritize the development of the filtering feature for reviews and the likes/dislikes feature in future iterations. These additions are critical for enhancing user engagement and feedback mechanisms.
  
  ### Enhanced User Feedback:
  
  - Continue to refine error handling and user feedback mechanisms to ensure they are clear, concise, and visually engaging. This will help reduce confusion and improve user satisfaction.
  
  ### Comprehensive Testing:
  
  - Implement a more robust testing strategy to catch issues related to redirection and feature functionality earlier in the development process.
  
  ### Improved Collaboration:
  
  - Foster better communication within the team regarding feature responsibilities and timelines to ensure all features are developed as planned.
  
  ### Documentation and Tracking:
  
  - Utilize GitHub Issues more effectively for feature tracking and documentation of ongoing tasks, which will help keep the team aligned and accountable.

#### Things to be improved:

- **Aesthetic enhancements**: Enhance the design and structure of all pages for a more interactive user experience, making it easy on the eyes.
- **Review visibility**: Interlink individual reviews such that all users can be able to access other users' reviews, instead of having them stored and visible only locally.
- **Server Connection**: It should be connected to the application server so that reviews stored and gotten are directly from the database and not just on the local end.
- **Review deletion**: Allow users to delete reviews they've posted, giving more control to users over what they post.
- **General rating of gym**: Introduce a feature to sum up the total reviews and come up with an overall rating for each gym's individual ratings. (Numerical rating)
- **Filter reviews**: Filtering options for reviews according to a particular criterion that the user prefers—whether latest or highest rated, or most liked reviews. 
- **Improved data extraction**: Refine the review process by asking for better questions and specific sections that justify users' ratings in order to enhance the quality of feedback.

## More changes to come.

### Testing and Code Quality

**Test cases and results:**

We have implemented automated testing using Rails' built-in test framework to ensure that key functionality in the application works as expected. Below are the details of our testing process for the login functionality and how it passes.

**Test Scenario: User Login**
Test File: test/controllers/sessions_controller_test.rb
Description: This test verifies the login functionality of the application, ensuring that:
Users can log in with valid credentials.
Users cannot log in with invalid credentials (and a 422 Unprocessable Entity status is returned).
A proper response is received upon logging out.
Expected Results:
A user with valid credentials should be logged in successfully and redirected to the home page.
A user with invalid credentials should see an error message and the login page should be re-rendered with a 422 Unprocessable Entity status.
A user logging out should be redirected to the login page with a logout success message.

Actual Results:
Running 3 tests in a single process (parallelization threshold is 50)
Run options: --seed 46646

# Running:

...

Finished in 1.358292s, 2.2087 runs/s, 5.8897 assertions/s.
3 runs, 8 assertions, 0 failures, 0 errors, 0 skips

Conclusion:
The tests passed successfully, as indicated by 0 failures and 0 errors, confirming that the login, logout, and invalid login functionalities work as expected

**Review Functionality Testing:**
We have implemented automated testing using Rails' built-in test framework to ensure that key functionality in the application works as expected. Below are the details of our testing process for the review functionality and how it passes.

**Test Scenario: Review Submission**
Test File: test/controllers/reviews_controller_test.rb
Description: This test verifies the review submission functionality of the application, ensuring that:

Users can successfully add a review when logged in.
Users cannot add a review when not logged in (and are redirected appropriately).
Expected Results:

A logged-in user should be able to submit a review successfully, and the review should be added to the gym's page.
A user who is not logged in should be redirected to the login page when attempting to submit a review.

**Actual Results:**
Running 2 tests in a single process (parallelization threshold is 50)
Run options: --seed 17188

# Running:

..

Finished in 1.370940s, 1.4589 runs/s, 4.3766 assertions/s.
2 runs, 6 assertions, 0 failures, 0 errors, 0 skips

Conclusion:
The tests passed successfully, as indicated by 0 failures and 0 errors, confirming that the review submission functionality works as expected, allowing users to add reviews when logged in and restricting access when not logged in.


### Instructions for running:
1) Make sure that you have Ruby version 3.3.5 or later installed
2) MAke sure you have Rails version 7.2.1 installed
3) Also make sure you have PostgreSQL installed and that it runs properly
4) Clone the repository
5) Then install all the dependencies by running the command 'bundle install'
6)  Then set up the database by running the commands:
'rails db:create'
'rails db:migrate'

7) Next seed the database using the command 'rails db:seed'
8) Now you can start the rails server with the command 'rails server'
9) on the terminal navigate to http://localhost:3000 to view our application !

---
### Retrospective For Iteration 1:

### Feature Tracking

![image](https://github.com/user-attachments/assets/c356d122-22f1-4102-8d6d-b14da9398f6e)

![image](https://github.com/user-attachments/assets/3506cc0a-3624-43aa-8092-79d46f296139)

What went wrong:
**Inconsistency in description and pictures of the gym**: While interlinking the gyms during the creation of the pages, it came to notice that the gyms' links opened at different and wrong descriptions and images altogether for each uniquely important gym page. For example, when "She's Fit" is clicked, it would result in a "Club 16" description and vice-versa.

- **How we solved it**: The database identifier for the gym was not aligned correctly with the images and the descriptions of the gyms inside the view files. This was fixed by mapping each identifier of the gym in the `seeds.rb` file and in the `index.html.erb` file correctly, running migrations again, and seeding again. This ended up fixing the mismatch of gyms and their respective data. We also had to redo this part as we had to assign each gym an id and put it in the database. Moreover, even though it was fixed for one member, when another member would run the application, these problems would still be there. Later we realized this was due to changes being stored locally and the database already had saved info which had to be erased in order for the changes for the database to appear.

**Database Migration Errors**: In development, we've encountered migration conflicts. It was trying to add such schema into the reviews table columns like location_rating and staff_rating. It resulted in an error whereby Rails refused to run the migration because there were duplicate columns.

- **How we fixed it**: We examined the migration files to see what columns had already been created so we wouldn't create them again. We used this data to remove added columns that were duplicated in the migration file. After updating the schema, we successfully solved the migration error and ran the migrations.

**Rails server errors and migration failures**: This was one of the biggest errors we had encountered as it prevented us from viewing our application when we pulled filed from github. Basically when we would run rails server, a big red error would be displayed regarding pending migrations -**ActiveRecord::PendingMigrationError**, indicating that migrations had not been applied to the database.

- **How we fixed it**: At first we couldn't understand the error. Then we learnt what it meant and where it occurred from. We fixed this by running `rails db:migrate`, which applied all the pending migrations so our schema was updated. Since there were some other errors, like migration conflicts (such as duplicate columns), we made manual changes to the migration files and ran migrations again. This took quite some time as we didn't know what to do or didn't expect this.

**Setup Inconsistencies**: We encountered inconsistencies in the local setup when running the app, such as issues with data displaying on the gym detail page or reviews being visible/invisible. This was due to differences in how our local databases were set up and seeded.

- **How we fixed it**: We standardized our approach by having everyone run the command `rails db:reset` and seeding the database using one common `seeds.rb` file, ensuring that all local environments had consistent data. We also improved team coordination around migrations and database changes.

**Reviews Display Issues**: Reviews were not showing up on the individual pages of gyms. Reviews couldn’t be saved or fetched properly from the database, so they couldn’t be displayed on the front end.

- **How we fixed it**:
- we had an error before whih didnt allow us to display the reviews and we had to toruble shoot why. We had to make a database for each of the caterogies as before it didnt show the results for it. This allowed us to display the result. Another issue wehich we countered was that the program would crash whenvee the user tried to submit when some of the fielfs wre left empty. This caused the program to shut down and we then reazlied it was due to the paramters of not being right

**Error with Cached Files**: When we would launch the Rails server, we had errors due to file permission issues, which led to a caching-related error (`Errno::EACCES`) that prevented the application from running. We found out that the root cause is the permission settings for cached assets.

- **How we solved it**: We ran the command `rails tmp:clear` to clear the Rails cache, which removed the temporary cache files. We also made sure that the `tmp` folder had the correct write permissions for the server to function properly.

#### Things to be improved:

- **Aesthetic enhancements**: Enhance the design and structure of all pages for a more interactive user experience, making it easy on the eyes.
- **Review visibility**: Interlink individual reviews such that all users can be able to access other users' reviews, instead of having them stored and visible only locally.
- **Server Connection**: It should be connected to the application server so that reviews stored and gotten are directly from the database and not just on the local end.
- **Review deletion**: Allow users to delete reviews they've posted, giving more control to users over what they post.
- **General rating of gym**: Introduce a feature to sum up the total reviews and come up with an overall rating for each gym about individual ratings.
- **Filter reviews**: Filtering options for reviews according to a particular criterion that the user prefers—whether latest or highest rated.
- **Improved data extraction**: Refine the review process by asking for better questions and specific sections that justify users' ratings in order to enhance the quality of feedback.
- **Back button**: Introduce the option for having a back button on review pages for easier access to either the previous pages or the gym listing.

## More changes to come.

### Testing and Code Quality

Test cases and results:

We have implemented automated testing using Rails' built-in test framework to ensure that key functionality in the application works as expected. Below are the details of our testing process for the login functionality and how it passes.

Test Scenario: User Login
Test File: test/controllers/sessions_controller_test.rb
Description: This test verifies the login functionality of the application, ensuring that:
Users can log in with valid credentials.
Users cannot log in with invalid credentials (and a 422 Unprocessable Entity status is returned).
A proper response is received upon logging out.
Expected Results:
A user with valid credentials should be logged in successfully and redirected to the home page.
A user with invalid credentials should see an error message and the login page should be re-rendered with a 422 Unprocessable Entity status.
A user logging out should be redirected to the login page with a logout success message.

Actual Results:
Running 3 tests in a single process (parallelization threshold is 50)
Run options: --seed 46646

# Running:

...

Finished in 1.358292s, 2.2087 runs/s, 5.8897 assertions/s.
3 runs, 8 assertions, 0 failures, 0 errors, 0 skips

Conclusion:
The tests passed successfully, as indicated by 0 failures and 0 errors, confirming that the login, logout, and invalid login functionalities work as expected

Review Functionality Testing:
We have implemented automated testing using Rails' built-in test framework to ensure that key functionality in the application works as expected. Below are the details of our testing process for the review functionality and how it passes.

Test Scenario: Review Submission
Test File: test/controllers/reviews_controller_test.rb
Description: This test verifies the review submission functionality of the application, ensuring that:

Users can successfully add a review when logged in.
Users cannot add a review when not logged in (and are redirected appropriately).
Expected Results:

A logged-in user should be able to submit a review successfully, and the review should be added to the gym's page.
A user who is not logged in should be redirected to the login page when attempting to submit a review.

Actual Results:
Running 2 tests in a single process (parallelization threshold is 50)
Run options: --seed 17188

# Running:

..

Finished in 1.370940s, 1.4589 runs/s, 4.3766 assertions/s.
2 runs, 6 assertions, 0 failures, 0 errors, 0 skips

Conclusion:
The tests passed successfully, as indicated by 0 failures and 0 errors, confirming that the review submission functionality works as expected, allowing users to add reviews when logged in and restricting access when not logged in.


