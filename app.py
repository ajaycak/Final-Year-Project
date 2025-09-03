from flask import Flask, render_template, request
import pickle
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder


# Create a Flask application instance
app = Flask(__name__)

#loading models
model = pickle.load(open('model.pkl','rb'))
preprocessor = pickle.load(open('preprocessor.pkl','rb'))

@app.route('/')
def home():
    return render_template('index.html')
     

# Define a route and its associated function
@app.route('/predict', methods=['POST'])
def predict():
        
        Year = request.form['Year']
        average_rain_fall_mm_per_year = request.form['Rainfall']
        pesticides_tonnes = request.form['Pesticides']
        avg_temp = request.form['Temperature']
        Area = request.form['Country']
        Item  = request.form['Crop']

        features = np.array([[Year,average_rain_fall_mm_per_year,pesticides_tonnes,avg_temp,Area,Item]],dtype=object)
        transformed_features = preprocessor.transform(features)
        prediction = model.predict(transformed_features).reshape(1,-1)

        # Render the result template with the prediction
        return render_template('index.html', prediction=prediction)


# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
