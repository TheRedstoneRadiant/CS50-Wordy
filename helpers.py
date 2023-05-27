import random
from flask import redirect, request, url_for
from functools import wraps

word_lengths = [5, 6, 7]


def get_word(length):
    with open(f"datasets/words_{length}.txt", "r") as output:
        words = output.read().splitlines()
        random_index = random.randint(0, len(words) - 1)
        word_to_guess = words[random_index]

    return word_to_guess


def word_exists(word, length):
    """
    Check if word exists in file
    """
    with open(f"datasets/words_{length}.txt", "r") as output:
        words = output.read().splitlines()
    
    return word in words


def length_check(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            length = int(kwargs["length"])

        except Exception as e:
            return redirect(url_for("index"))

        if length not in word_lengths:
            return redirect(url_for("index"))
        return f(*args, **kwargs)

    return decorated_function
