from flask import Flask, flash, render_template, redirect, request, url_for
from flask_login import (
    LoginManager,
    login_user,
    logout_user,
    login_required,
    current_user,
)

from flask_sqlalchemy import SQLAlchemy

from datetime import datetime

from models import Users, Post, Claim, Post, Comments, DirectMessage, db

app = Flask(__name__)
app.config.from_object('config') 

with app.app_context():
    db.init_app(app) 
    db.create_all() 

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == "POST":
        user_name = request.form['user_name']
        password = request.form['password']
        phone = request.form['phone']
        address_line1 = request.form['address_line1']
        address_line2 = request.form['address_line2']
        city = request.form['city']
        country = request.form['country']
        user = Users(user_name=user_name, password=password, phone=phone, address_line1=address_line1, address_line2=address_line2, city=city, country=country)
        db.session.add(user)
        db.session.commit()
        flash('Thanks for registering')
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        user_name = request.form['user_name']
        user_password = request.form['user_password']
        user = Users.query.filter_by(user_name=user_name, user_password=user_password).first()
        if user:
            login_user(user)
            flash('Logged in successfully.')
            return redirect(url_for('index'))
        else:
            flash('Username or Password is incorrect.')
    return render_template('login.html')

@app.route('/catagories')
def catagories():
    return render_template('catagories.html')




if __name__ == "__main__":
    app.run(debug=True)

