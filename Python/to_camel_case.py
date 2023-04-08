# https://www.codewars.com/kata/517abf86da9663f1d2000003

import re
r = re.compile("[_-]")

def to_camel_case(text):
    text = r.split(text)
    answer_list = [text[0]]

    for idx in range(1, len(text)):
        cur_word = text[idx]
        new_word = cur_word[0].upper() + cur_word[1:]
        answer_list.append(new_word)

    return ''.join(answer_list)