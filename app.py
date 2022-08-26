from calendar import month
from datetime import date
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import os
import psycopg2
from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
# import MySQLdb
################################################## 
# Flask Setup#################################################
app = Flask(__name__)

# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:{password}@localhost:5432/postgres"


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://{username}:{password}@{end_point}}/{database_name}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
db.create_all

class myopia(db.Model):
    __tablename__ = 'myopia_data'
    id = db.Column(db.Integer, primary_key=True)
    studyyear = db.Column(db.Integer())
    myopic = db.Column(db.Integer())
    age = db.Column(db.Integer())
    gender = db.Column(db.Integer())
    spheq = db.Column(db.Float())
    al = db.Column(db.Float())
    acd = db.Column(db.Float())
    lt = db.Column(db.Float())
    vcd = db.Column(db.Float())
    sporthr = db.Column(db.Integer())
    readhr = db.Column(db.Integer())
    comphr = db.Column(db.Integer())
    studyhr = db.Column(db.Integer())
    tvhr = db.Column(db.Integer())
    diopterhr = db.Column(db.Integer())
    mommy = db.Column(db.Integer())
    dadmy = db.Column(db.Integer())

@app.route('/')
def home():
    # return () this is where we will call render templace and index.html
    return render_template("index1.html")

@app.route('/myopia') 
def myopic_da():
        myopdata = myopia.query.all()
        results =[
            {
                "ID": myop.id,
                "Age": myop.age,
                "Gender": myop.gender,
                "Spehq": myop.spheq, 
                "AL": myop.al, 
                "ACD": myop.al, 
                "LT": myop.lt, 
                "VCD": myop.vcd, 
                "SportHR": myop.sporthr, 
                "ReadHR": myop.readhr, 
                "CompHR": myop.comphr, 
                "StudyHR": myop.studyhr, 
                "TvHR": myop.tvhr, 
                "DiopterHR": myop.diopterhr, 
                "MomMyopic": myop.mommy,
                "DadMyopic": myop.dadmy,
                "Myopic_yesno": myop.myopic,
            } for myop in myopdata]
        return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)