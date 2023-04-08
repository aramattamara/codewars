# https://www.codewars.com/kata/5277c8a221e209d3f6000b56

def valid_braces(seq):
    
    while True:
            if '()' in seq:
                seq = seq.replace ('()', '')
            elif '{}' in seq:
                seq = seq.replace ('{}', '')
            elif '[]' in seq:
                seq = seq.replace ('[]', '')
            else:
                return not seq