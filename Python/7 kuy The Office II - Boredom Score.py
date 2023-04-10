# https://www.codewars.com/kata/57ed4cef7b45ef8774000014/python

def boredom(staff):
    boredom_scores = {'accounts': 1, 'finance': 2, 'canteen': 10, 
                      'regulation': 3, 'trading': 6, 'change': 6, 
                      'IS': 8, 'retail': 5, 'cleaning': 4, 'pissing about': 25}
    total_score = sum(boredom_scores.get(dept, 0) for dept in staff.values())
    
    if total_score <= 80:
        return 'kill me now'
    elif total_score < 100:
        return  'i can handle this'
    else:
        return 'party time!!'
    
    
test.describe("Basic tests")
test.assert_equals(boredom({"tim": "change", "jim": "accounts",
  "randy": "canteen", "sandy": "change", "andy": "change", "katie": "IS",
  "laura": "change", "saajid": "IS", "alex": "trading", "john": "accounts",
  "mr": "finance" }), "kill me now")