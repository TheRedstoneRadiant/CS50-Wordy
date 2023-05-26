from flask import Flask, render_template, request
from helpers import get_word, length_check, word_exists

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/<length>_letters")
@length_check
def wordle(length):
    return render_template("wordle.html", length=length)


@app.route("/random_word/<length>")
@length_check
def random_word(length):
    return get_word(int(length))

@app.route("/word_exists/<length>")
@length_check
def verify_word(length):
    if not request.args.get("word"):
        return "Please supply 'word' URL parameter!", 400
    
    # Word isn't alpha or length mismatch
    elif not request.args.get("word").isalpha() or len(request.args.get("word")) != length:
        return "Invalid word!", 400

    return word_exists(request.args.get("word"), length)


if __name__ == "__main__":
    app.run("0.0.0.0", port=8080)
