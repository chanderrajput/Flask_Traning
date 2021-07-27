from flask import Flask, redirect,url_for,render_template,request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/Login.html")
def login():
    return render_template("Login.html")

@app.route("/SignUp.html")
def signUp():
    return render_template("SignUp.html")

@app.route("/emotion.html", methods = ['POST', 'GET'])
def emotion():
    if request.method == 'POST':
        form_data = request.form.get("sentance")
        return render_template('emotion.html',form_data = form_data)
    else:
        return render_template('emotion.html',form_data = '')
        


if __name__ == "__main__":
    app.run(debug = True)