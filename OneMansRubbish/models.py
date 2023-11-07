from datetime import datetime

from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text


db = SQLAlchemy()

class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.mapped_column(db.Integer,primary_key=True)
    user_name = db.mapped_column(db.String(20),unique=True)
    password = db.mapped_column(db.String(20))
    phone = db.mapped_column(db.String(20))
    address_line1 = db.mapped_column(db.String(20))
    address_line2 = db.mapped_column(db.String(20))
    city = db.mapped_column(db.String(20))
    country = db.mapped_column(db.String(20))

    def __repr__(self):
        return f"Users('{self.id}','{self.user_name}','{self.password}','{self.phone}','{self.address_line1}','{self.address_line2}','{self.city}','{self.country}')"


class Catagory(db.Model):
    __tablename__ = 'catagories'
    catagory_id = db.mapped_column(db.Integer,primary_key=True)
    catagory_name = db.mapped_column(db.String(20))

    def __repr__(self):
        return f"Catagory('{self.catagory_id}','{self.catagory_name}')"
     

class Post(db.Model):
    __tablename__ = 'post'
    post_id = db.mapped_column(db.Integer,primary_key=True)
    user_id = db.mapped_column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    posted_by = db.relationship('User',backref='post',lazy=True)
    post_title = db.mapped_column(db.String(100))
    post_category = db.mapped_column(db.String(100))
    post_quantity = db.mapped_column(db.Integer)
    post_description = db.mapped_column(db.Text)
    post_date = db.mapped_column(db.DateTime,default=datetime.utcnow)
    post_location = db.mapped_column(db.String(100))
    post_status = db.mapped_column(db.String(100))
   

    def __repr__(self):
        return f"Post('{self.post_id}','{self.posted_by}'{self.user_id}','{self.post_title}','{self.post_category}','{self.post_quantity}','{self.post_description}','{self.post_date}','{self.post_location}','{self.post_status}')"

class Claim(db.Model):
    __tablename__ = 'claims'
    claim_id = db.mapped_column(db.Integer,primary_key=True)
    claim_post_id = db.mapped_column(db.Integer)
    claim_user_id = db.mapped_column(db.Integer)
    claim_status = db.mapped_column(db.String(100))

    def __repr__(self):
        return f"Claim('{self.claim_id}','{self.claim_post_id}','{self.claim_user_id}','{self.claim_status}')"
    
class Comments(db.Model):
    __tablename__ = 'comments'
    comment_id = db.mapped_column(db.Integer,primary_key=True)
    comment_post_id = db.mapped_column(db.Integer,db.ForeignKey('post.post_id'),nullable=False)
    comment_user_id = db.mapped_column(db.Integer,db.ForeignKey('users.id'),nullable=False)
    comment_by = db.relationship('User',backref='comments',lazy=True)
    comment_text = db.mapped_column(db.Text)
    comment_date = db.mapped_column(db.DateTime,default=datetime.utcnow)

    def __repr__(self):
        return f"Comments('{self.comment_id}','{self.comment_post_id}','{self.comment_user_id}','{self.comment_text}','{self.comment_date}')"
    
class DirectMessage(db.Model):
    __tablename__ = 'direct_messages'
    direct_message_id = db.mapped_column(db.Integer,primary_key=True)
    direct_message_sender_id = db.mapped_column(db.Integer)
    direct_message_reciever_id = db.mapped_column(db.Integer)
    direct_message_text = db.mapped_column(db.Text)
    direct_message_date = db.mapped_column(db.DateTime,default=datetime.utcnow)

    def __repr__(self):
        return f"DirectMessage('{self.direct_message_id}','{self.direct_message_sender_id}','{self.direct_message_reciever_id}','{self.direct_message_text}','{self.direct_message_date}')"
