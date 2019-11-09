function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  window.onload = function () {
                startTab();
            };
function startTab()
{
 document.getElementById("defaultOpen").click();
}
  
  function metricCalculate() {

    var mgender = document.getElementById("mgender").value;
    var mweight = parseFloat(document.getElementById("mweight").value);
    var mheight = parseFloat(document.getElementById("mheight").value);
    var mage = parseFloat(document.getElementById("mage").value);
    var mactivitylevel = document.getElementById("mactivitylevel").value;
      var MaintenanceCaloriesm = 0;


    if(mgender=="male") 
            {
            var mval1 = 13.75 * mweight;
            var mval2 = 5.0 * mheight;
            var mval3 = 6.8 * mage;
            var mresult = 66.5 + mval1 + mval2 - mval3;
            var mval4 = mactivitylevel;
        }

    else if (mgender=="female")
            {
            var mval1 = 9.6 * mweight;
            var mval2 = 1.85 * mheight;
            var mval3 = 4.7 * mage;
            var mresult = 655.1 + mval1 + mval2 - mval3;
            var mval4 = mactivitylevel;
        }


   switch(mval4) {
       case "l":
         MaintenanceCaloriesm = mresult * 1.53;
            break;

      case "lm":
         MaintenanceCaloriesm = mresult * 1.53;
         break;

         case "m":
         MaintenanceCaloriesm = mresult * 1.76;
        break;

       case"mh":
          MaintenanceCaloriesm = mresult * 1.76;
         break;
             
         case "h":
             MaintenanceCaloriesm = mresult * 2.25;
        break;
                }
document.getElementById("bmr").innerHTML = mresult.toFixed(2);
document.getElementById("calories").innerHTML = MaintenanceCaloriesm.toFixed(2);

}
function Calculate() {

    var gender = document.getElementById("gender").value;
    var pounds = parseFloat(document.getElementById("Pounds").value);
    var inches = parseFloat(document.getElementById("inches").value);
    var feet = parseFloat(document.getElementById("feet").value);
    var stone = parseFloat(document.getElementById("stone").value);
    var age = parseFloat(document.getElementById("age").value);
    var activitylevel = document.getElementById("activitylevel").value;
      var MaintenanceCalories = 0;


    if(gender=="male") 
            {
            var weight = stone + 14*pounds ; 
            var height = feet + 12*inches;
            var val1 = 6.2 * weight;
            var val2 = 12.7 * height;
            var val3 = 6.76 * age;
            var result = 66 + val1 + val2 - val3;
            var val4 = activitylevel;
        }

    else if (gender=="female")
            {
            var weight = stone + 14*pounds ; 
            var height = feet + 12*inches;
            var val1 = 4.35 * weight;
            var val2 = 4.7 * height;
            var val3 = 4.7 * age;
            var result = 655.1 + val1 + val2 - val3;
            var val4 = activitylevel;
        }

        
   switch(val4) {
       case "a":
         MaintenanceCalories = result * 1.53;
            break;

      case "b":
         MaintenanceCalories = result * 1.53;
         break;

         case "c":
         MaintenanceCalories = result * 1.76;
        break;

       case"d":
          MaintenanceCalories = result * 1.76;
         break;
             
         case "e":
             MaintenanceCalories = result * 2.25;
        break;
                }

                document.getElementById("ImperialBmp").innerHTML = result.toFixed(2);
                document.getElementById("Imperialcalories").innerHTML = MaintenanceCalories.toFixed(2);
            }