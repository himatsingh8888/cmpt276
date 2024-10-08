### **What our project is about:** 

Our project, **RateMyGym**, is a platform that allows users to rate and review local gyms based on various factors such as price, equipment, location, and environemnt, etc.  
Built using **Ruby on Rails** and adhering to the **Model-View-Controller (MVC)** architecture, the platform includes essential features like a secure login system and an 
upcoming user profile page where users can manage their account and activity. Once a user selects a gym and writes a review, the system adds the new review to create both
an overall gym rating and a breakdown of specific reviews, allowing users to see aggregated ratings for factors such as machines, staff, cleanliness, and atmosphere. 
The front-end uses HTML, CSS, and JavaScript to deliver an intuitive interface, while the back-end efficiently manages user authentication, data storage, and the dynamic 
display of gym information and reviews. **PostgreSQL** is used for database management, and the development process follows best practices, including feature tracking 
and version control through GitHub.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Retrospective

#### What went right:
- Successfully set up the **MVC framework** using Ruby on Rails, ensuring a well-structured codebase.
- Implemented **login and sign-up functionality**, which securely remembers users and passwords locally.
- Displayed a list of **five gyms** (Planet Fitness, GoodLife Fitness, Club 16, She’s Fit, and Anytime Fitness), providing users with access to local gym information.
- **Direct navigation**: Successfully implemented the feature where clicking on a gym takes the user to a unique page for that specific gym.
- Created the ability to **write and post reviews**, allowing users to share their thoughts on different gym aspects like machines, staff, cleanliness, etc.

#### What went wrong:
- **Gym description and image mismatch**: When setting up the gym pages, we encountered an issue where gyms were incorrectly linked, resulting in the wrong descriptions
  and images being displayed on the unique gym pages. For example, clicking on "She’s Fit" would show the description for "Club 16" and vice versa. 
      - **How we fixed it**: We identified that the gym IDs in the database were incorrectly linked to the gym images and descriptions in the view files. We fixed this
        by ensuring that each gym's ID was correctly mapped in both the `seeds.rb` file and the `index.html.erb` file, and by running the migrations and seeding the database again.
        This corrected the mismatch between the gyms and their respective data.

- **Database migration errors (duplicate columns)**: During development, we encountered migration conflicts. One major issue was attempting to add columns to the `reviews` table,
-  such as `location_rating` and `staff_rating`, which already existed in the schema. This resulted in an error where Rails would refuse to run the migration due to duplicate columns.
      - **How we fixed it**: We inspected the migration files and identified which columns were already present. By removing the duplicate column additions from the migration files
        and ensuring the schema was up to date, we were able to resolve the migration errors and successfully run the migrations.

- **Rails server errors and migration failures**: At one point, running `rails server` resulted in a significant error due to pending migrations. The error message displayed was
  **ActiveRecord::PendingMigrationError**, which indicated that migrations hadn’t been applied to the database.
        **How we fixed it**: We resolved this issue by running `rails db:migrate` to apply the pending migrations, ensuring the database schema was up to date.
        When further issues arose, like migration conflicts (e.g., duplicate columns), we had to manually adjust the migration files and reapply the migrations.

- **Local environment inconsistencies**: Team members experienced inconsistencies when running the application locally, such as differences in the gym data or review visibility.
   This was likely due to differences in how our local databases were set up and seeded.
      - **How we fixed it**: We standardized our approach by making sure everyone ran `rails db:reset` and seeded the database with the same `seeds.rb` file. This ensured that
         all local environments had consistent data. Additionally, we introduced better team coordination around migrations and changes to the database.

- **Review display issues**: Initially, the reviews weren’t being properly displayed on the unique gym pages. Reviews weren’t saved or retrieved correctly from the database,
   making it impossible to view them on the frontend.
      - **How we fixed it**: We reviewed the controller logic responsible for handling reviews and realized that the associations between the `Review` and `Gym` models weren’t
        correctly set. By fixing these relationships and ensuring that the correct queries were being made in the controller, we were able to display reviews accurately on the gym pages.

- **Error with cached files**: We encountered an issue with file permissions when running the Rails server, where an error related to the cache (`Errno::EACCES`) would prevent
  the application from functioning. The error stemmed from permission issues with cached assets.
      - **How we fixed it**: We cleared the Rails cache using the `rails tmp:clear` command, which deleted the temporary cache files. Additionally, we ensured the `tmp` folder
        had the correct write permissions for the server to function correctly.

#### Things to improve:
- **Aesthetic improvements**: Enhance the design and appearance of all pages to make the user experience more engaging and visually appealing.
- **Review visibility**: Link individual reviews so that all users can see each other's reviews, instead of reviews being stored and visible only locally.
- **Server connection**: Connect the application to the server to ensure reviews are stored and accessed through the database, rather than just locally.
- **Delete reviews**: Add a feature that allows users to delete their reviews, giving them more control over their posted content.
- **Overall gym rating**: Implement functionality to accumulate total reviews and generate an overall rating for each gym based on individual ratings.
- **Review filtering**: Introduce filtering options for users to sort or view reviews based on different criteria (e.g., most recent, highest rating).
- **Improved data collection**: Refine the review process to include better questions and more specific sections for users to justify their ratings, improving the quality of feedback.
- **Back button**: Add a back button on the review pages, allowing users to easily navigate back to the gym listing or previous pages.

More changes to come. 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Testing and Code Quality

Test cases and results: 

