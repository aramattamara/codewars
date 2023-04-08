# https://www.codewars.com/kata/596343a24489a8b2a00000a2


import re

def is_it_a_num(s: str) -> str:
    result = re.sub(r'[^0-9]', '', s)
    if len(result) == 11 and result.split()[0][0] == "0":
        return result
    else:
        return "Not a phone number"