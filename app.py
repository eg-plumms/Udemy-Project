from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', Title="Course")
    
@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def sign():
    return render_template('signup.html')

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/course')
def course():
    return render_template('course_info.html')

@app.route('/course/<courseNum>')
def specific_course(courseNum):
    return render_template("IndivCourse.html", courseNum=courseNum)

@app.route('/courses')
def courses():
    return render_template('course_stuff.html')

if __name__ =="__main__":
    app.run()
