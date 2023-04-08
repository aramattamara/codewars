# https://www.codewars.com/kata/545cedaa9943f7fe7b000048

#1 option
def is_pangram(s):
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	

    sentence = s.lower()
    for c in sentence:
        if c in alphabet:
            alphabet.remove(c)

    return len(alphabet) == 0

#2 version
# import string

# def is_pangram(s):
#     s = s.upper()
#     for char in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
#         if char not in s :
#             return False
#     return True

# #3 version
# def is_pangram(s):
# 	letters = set()

# 	lowercased = s.lower()
# 	for c in lowercased:
#     		if c.isalpha():
#         		letters.add(c)

# 	return len(letters) == 26