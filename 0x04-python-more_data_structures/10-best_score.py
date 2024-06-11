#!/usr/bin/python3
def best_score(a_dictionary):
    if a_dictionary:
        my_list = list(a_dictionary.keys())
        score = 0
        lead_key = ""
        for i in my_list:
            if a_dictionary[i] > score:
                score = a_dictionary[i]
                lead_key = i
        return lead_key
