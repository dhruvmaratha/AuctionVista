from flask import Flask, render_template, request, redirect, url_for, session
from models import db, LoginTable
import bcrypt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://sample_db_r6dx_user:ZZcFyMubuq6QoRDbMulJLNr0IcNKwzkn@dpg-crtb2fjtq21c73dmqev0-a.singapore-postgres.render.com/sample_db_r6dx'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'chotu143'

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/events')
def events():
    return render_template('events.html')

@app.route('/about')
def about():
    return render_template('about-us.html')

@app.route('/how-it-works')
def how_it_works():
    return render_template('how-it-works.html')

@app.route('/our-commitment')
def our_commitment():
    return render_template('our-commitment.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('home'))

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']  
        phone_number = request.form['phone-number']

        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        
        # Check if user already exists
        user_exists = LoginTable.query.filter_by(email=email).first()
        if user_exists:
            return redirect(url_for('login'))
        
        new_user = LoginTable(
            username=username,
            email=email,
            password=hashed_password.decode('utf-8'),
            phone_number=phone_number,
        )
        db.session.add(new_user)
        db.session.commit()

        # data = LoginTable.query.all()
        # print(data)

        session['username'] = username

        print('Account created successfully!')
        return redirect(url_for('home'))
    
    return render_template('signup.html')


@app.route('/auth', methods=['GET', 'POST'])
def auth():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = LoginTable.query.filter_by(email=email).first()
        
        if user and bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
            # Password matches, login the user
            print(user.username)
            session['username'] = user.username
            return redirect(url_for('home'))
        else:
            return redirect(url_for('login'))

    return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=True)
