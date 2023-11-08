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

from models import User, Post, Claim, Post, Comments, DirectMessage, db

app = Flask(__name__)
app.config.from_object('config') 

with app.app_context():
    db.init_app(app) 
    db.create_all() 

login_manager = LoginManager(app)
login_manager.login_view = "login"

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))



@app.route('/')
def index():

    return render_template("index.html", posted=Post.query.all())


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == "POST":
        user_name = request.form['user_name']
        password = request.form['password']
        full_name = request.form['full_name']
        phone = request.form['phone']
        address_line1 = request.form['address_line1']
        address_line2 = request.form['address_line2']
        city = request.form['city']
        country = request.form['country']
        user = User(user_name=user_name, password=password, full_name=full_name, phone=phone, address_line1=address_line1, address_line2=address_line2, city=city, country=country)
        db.session.add(user)
        db.session.commit()
        
        return redirect(url_for('login'))
    return render_template('register.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        user_name = request.form['user_name']
        password = request.form['password']
        user = User.query.filter_by(user_name=user_name, password=password).first()
        if user:
            login_user(user)
            flash(f"Welcome back, {user_name}!")
            print(current_user.id)
            return redirect(url_for("index"))
        else:
            flash('Invalid Credentials')
            return redirect(url_for('login'))
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))


@app.route('/listing/<int:post_id>', methods=['GET','POST'])
def listing(post_id):
   
    if request.method == "POST":
        # todo: check user logged in
        comment_text = request.form['comment-text']
        comment_user_id = current_user.id
        comment_post_id = post_id
        comments = Comments(comment_text=comment_text, comment_post_id=comment_post_id, comment_user_id=comment_user_id)
        db.session.add(comments)
        db.session.commit()
       
    post = Post.query.get_or_404(post_id)
    return render_template('listing.html', post=post, comments=Comments.query.filter_by(comment_post_id=post_id).all(), claims=Claim.query.filter_by(claim_post_id=post_id).all())

# change post staus to claimed
@app.route('/claim_post/<int:post_id>', methods=['GET','POST'])
@login_required


def claim_post(post_id):
    post = Post.query.get_or_404(post_id)
    if request.method == "POST":
        claim_post_id = post.post_id
        claim_user_id = current_user.id
        claim_status = "claimed"
        claim = Claim(claim_post_id=claim_post_id, claim_user_id=claim_user_id, claim_status=claim_status)
        post.post_quantity = post.post_quantity - 1
        if post.post_quantity == 0:
            post.post_status = "Reserved-Pending Collection"
        db.session.add(claim)
        db.session.commit()
        return redirect(url_for('listing', post_id=post.post_id))
    
    print (post.post_id)
    return render_template('claim.html', post=post, comments=Comments.query.filter_by(comment_post_id=post_id).all())

@app.route('/categories')
def categories():
    return render_template('categories.html')


@app.route('/submit_post', methods=['GET', 'POST'])
@login_required
def submit_post():
    if request.method == "POST":
        post_title = request.form['post_title']
        user_id = current_user.id
        post_description = request.form['post_description']
        post_category = request.form['post_category']
        post_quantity = request.form['post_quantity']
        post_location = request.form['post_location']
     
        post_img_url = request.form['post_img_url']
       
        post = Post(post_title=post_title, 
                    user_id=user_id, 
                    post_description=post_description, 
                    post_category=post_category, 
                    post_quantity=post_quantity, 
                    post_location=post_location, 
                   
                    post_img_url=post_img_url)
        db.session.add(post)
        db.session.commit()
       
        return redirect(url_for('index'))
    return render_template('submit_post.html')


@app.route('/profile')
@login_required
def profile():
    return render_template('profile.html', posted=Post.query.filter_by(user_id=current_user.id).all(),
                           claimed=Claim.query.all(),
                           comments=Comments.query.filter_by(comment_user_id=current_user.id).all())

if __name__ == "__main__":
    app.run(debug=True)

