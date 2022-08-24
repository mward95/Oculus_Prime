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

################################################## 
# Flask Setup#################################################
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgress@localhost:5432/postgres"
# jdbc:postgresql://database-1.crlshbglbzmo.us-east-1.rds.amazonaws.com/postgres
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
def myopic_st():
        usbasinprod = myopia.query.all()
        results1 =[
            {
                "Basin_Name": prod.basins,
                "Date": prod.period,
                "Oil_Prod": prod.value,
                "Size": prod.size,
            } for prod in usbasinprod]

        # return {"count": len(results), "us_rig_count": results}
        return jsonify(results1)

if __name__ == "__main__":
    app.run(debug=True)