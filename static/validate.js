function validation() {

    var inputCountry = document.getElementById("Country").value;
    var countries = ['Albania', 'Algeria', 'Angola', 'Argentina', 'Armenia',
        'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
        'Bangladesh', 'Belarus', 'Belgium', 'Botswana', 'Brazil',
        'Bulgaria', 'Burkina Faso', 'Burundi', 'Cameroon', 'Canada',
        'Central African Republic', 'Chile', 'Colombia', 'Croatia',
        'Denmark', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador',
        'Eritrea', 'Estonia', 'Finland', 'France', 'Germany', 'Ghana',
        'Greece', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras',
        'Hungary', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Italy',
        'Jamaica', 'Japan', 'Kazakhstan', 'Kenya', 'Latvia', 'Lebanon',
        'Lesotho', 'Libya', 'Lithuania', 'Madagascar', 'Malawi',
        'Malaysia', 'Mali', 'Mauritania', 'Mauritius', 'Mexico',
        'Montenegro', 'Morocco', 'Mozambique', 'Namibia', 'Nepal',
        'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Norway',
        'Pakistan', 'Papua New Guinea', 'Peru', 'Poland', 'Portugal',
        'Qatar', 'Romania', 'Rwanda', 'Saudi Arabia', 'Senegal',
        'Slovenia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan',
        'Suriname', 'Sweden', 'Switzerland', 'Tajikistan', 'Thailand',
        'Tunisia', 'Turkey', 'Uganda', 'Ukraine', 'United Kingdom',
        'Uruguay', 'Zambia', 'Zimbabwe'
    ];

    if(document.getElementById("Crop")===""||document.getElementById("Rainfall").value.trim()===""||document.getElementById("Pesticides").value.trim()===""||document.getElementById("Temperature").value.trim()===""||document.getElementById("Year").value.trim()==="") {
        document.getElementById("Empty-status").innerText = "Data not found. Please fill out all the fields";
        return false; // Prevent form submission
    }
    else if (countries.includes(inputCountry)) {
        return true; // Continue with form submission
    } else {
        document.getElementById("Country-status").innerText = "Data not found. Please try with first letter as capital. (Example: India)";
        return false; // Prevent form submission
    }
    
}

window.onload = function() {
    var element = document.getElementById("Yield-Prediction");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }