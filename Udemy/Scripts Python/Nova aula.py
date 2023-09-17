rating = 4
highly_rated = rating >=4
print('Highly rated:')
print(highly_rated)

#------------------------------

characters = 134
limit_reached = characters >=250
print('Character limit reached:')
print(limit_reached)

#-----------------

tries_left = 3
print(tries_left >= 0)
print(tries_left > 0)


#----------

temperature = 30
is_freezing = temperature < 32
print(is_freezing)


#---------
age = 19
min_age = 16
print('Old enough to drive:');

print(age >= min_age)

# Comparing Dataset Entries

id_1 = "#4"
average_grade_1 = "A"
test_score_1 = 90

id_2 = "#5"
average_grade_2 = "A"
test_score_2 = 70
no_duplicates = id_1 != id_2
print("No duplicate entries:")
print(no_duplicates)

same_average = average_grade_1 == average_grade_2
print("Same average grade:")
print(same_average)

higher_score = test_score_1 > test_score_2
print("id_1 has a higher score:")
print(higher_score)

print("tweet" == "post")



