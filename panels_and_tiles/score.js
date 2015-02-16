/*
usr score = pull from database
make series of conditional statements for level tiers... 
i.e. level 1 is 0-349 level 2 is 350-499, level 3 is 500-699, etc...
and then say percent_complete = usr_score/score_cap_of_current_level
then use query selector on id of progress bar inner and change
style("width", percent_complete-1)
	-1 because the inner bar has got to be smaller than the outerbar
		visually speaking b/c a set of inset shadows on the outer
		bar makes such an edit neccesary 



*/

