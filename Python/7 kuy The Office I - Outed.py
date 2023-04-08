# https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/solutions/python

def outed(meet, boss):
    total_score = sum(meet.values())
    num_people = len(meet)
    
    total_score += meet[boss]
    
    
    overall_rating = total_score / num_people
    
    if overall_rating <= 5:
        return 'Get Out Now!'
    else:
        return 'Nice Work Champ!'
    
    
# test.describe("Example tests")
# test.assert_equals(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!')
# test.assert_equals(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!')
# test.assert_equals(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'), 'Get Out Now!')
