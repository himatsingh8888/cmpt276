module ReviewsHelper
    #Helper function to 
    def star_rating_display(average_rating)
         # Return empty stars if average_rating is nil
        return ('<i class="bx bx-star" style="color: lightgray; font-size: 1.6rem;"></i>' * 5).html_safe if average_rating.nil?
        # Calculates the total amount of full stars
        integer_part = average_rating.floor
        # Finds the fraction amound to display half star
        fractional_part = average_rating - integer_part

        # Determine the number of remaining stars
        remaining_stars = 5 - integer_part

        # Generate full stars
        full_stars = ('<i class="bx bxs-star" style="color: #FFBD13; font-size: 1.6rem;"></i>' * integer_part).html_safe
        if fractional_part == 0.8 || fractional_part == 0.9
            star = ('<i class="bx bxs-star" style="color: #FFBD13; font-size: 1.6rem;"></i>' * integer_part).html_safe
            full_stars + star
        end

        #Generate half stars 
        half_star = ''
        # only generates half stars when the fractional amount is between 0.3 and 0.8
        if fractional_part >= 0.3 && fractional_part <= 0.7
        remaining_stars -= 1
        half_star = '<i class="bx bxs-star-half" style="color: #FFBD13; font-size: 1.6rem;"></i>'.html_safe
    
        end

        # Generate empty stars
        empty_stars = ('<i class="bx bx-star" style="color: lightgray; font-size: 1.6rem;"></i>' * remaining_stars).html_safe

        # Return the combined HTML for full, half, and empty stars
        full_stars + half_star + empty_stars
    end

   
end
