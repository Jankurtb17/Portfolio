<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  <title>Portfolio</title>
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/style2.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200;300&family=Roboto:wght@300&display=swap" rel="stylesheet">
</head>
<body>

  <div class="row">
    <div class="col-lg-2">
      <div class="imageContainer1">
        <a href="#screenshot1" id="screenshot1">
          <img src ="./images/website2/Sy.jpg" class="img-fluid " height="400" width="800" />
        </a>

      </div>
    </div>

    <div class="col-lg-2">
      <div class="imageContainer1" id="screenshot2">
        <img src ="./images/website2/subjects.JPG" class="img-fluid " height="400" width="800" />
      </div>
    </div>

    <div class="col-lg-2">
      <div class="imageContainer1" id="screenshot3">
        <img src ="./images/website2/class.jpg" class="img-fluid " height="400" width="800" />
      </div>
    </div>

    <div class="col-lg-2">
      <div class="imageContainer1" id="screenshot4">
        <img src ="./images/website2/addclass.jpg" class="img-fluid " height="400" width="800" />
      </div>
    </div>

    <div class="col-lg-2">
      <div class="imageContainer1" id="screenshot5">
        <img src ="./images/website2/teachers.jpg" class="img-fluid " height="400" width="800" />
      </div>
    </div>

    <div class="col-lg-2">
      <div class="imageContainer1" id="screenshot6">
        <img src ="./images/website2/add-teacher.JPG" class="img-fluid " height="400" width="800" />
      </div>
    </div>
  </div>

  <div class="row mt-3">
    <div class="col-lg-2">
      <div class="imageContainer1" id="screenshot7">
        <img src ="./images/website2/show-teacher.jpg" class="img-fluid " height="400" width="800" />
      </div>
    </div>

    <div class="col-lg-2">
      <div class="imageContainer1" id="screenshot8">
        <img src ="./images/website2/students.jpg" class="img-fluid " height="400" width="800" />
      </div>
    </div>
    <div class="col-lg-2">
      <div class="imageContainer1" id="screenshot9">
        <img src ="./images/website2/addstudents.jpg" class="img-fluid " height="400" width="800" />
      </div>
    </div>
    <div class="col-lg-2">
      <div class="imageContainer1" id="screenshot10">
        <img src ="./images/website2/teacher-class.jpg" class="img-fluid" height="400" width="800" />
      </div>
    </div>
    <div class="col-lg-2">
      <div class="imageContainer1" id="screenshot11">
        <img src ="./images/website2/show-student.jpg" class="img-fluid" height="400" width="800" />
      </div>
    </div>
  </div>

  <div class="row mt-2">
    <h1 id="screenshot-header"></h1>
    <div class="screenshot" id="mainScreenshot1">
    </div>

  </div>



</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.4.0.js" integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo=" crossorigin="anonymous"></script>
<script type="text/javascript">
 $('#screenshot1').on('click', function() {
   $('#mainScreenshot1').css('background-image', 'url(./images/website2/Sy.JPG)');
   $('#mainScreenshot1').css('height', '100vh');
   $('#screenshot-header').text('Screenshot 1');
 });
 $('#screenshot2').on('click', function() {
   $('#mainScreenshot1').css('background-image', 'url(./images/website2/subjects.JPG)');
   $('#mainScreenshot1').css('height', '100vh');
   $('#screenshot-header').text('Screenshot 2');
 });
 $('#screenshot3').on('click', function() {
   $('#mainScreenshot1').css('background-image', 'url(./images/website2/class.JPG)');
   $('#mainScreenshot1').css('height', '100vh');
   $('#screenshot-header').text('Screenshot 3');
 });
 $('#screenshot4').on('click', function() {
   $('#mainScreenshot1').css('background-image', 'url(./images/website2/addclass.JPG)');
   $('#mainScreenshot1').css('height', '100vh');
   $('#screenshot-header').text('Screenshot 4');
 });
 $('#screenshot5').on('click', function() {
   $('#mainScreenshot1').css('background-image', 'url(./images/website2/teachers.JPG)');
   $('#mainScreenshot1').css('height', '100vh');
   $('#screenshot-header').text('Screenshot 5');
 });
 $('#screenshot6').on('click', function() {
   $('#mainScreenshot1').css('background-image', 'url(./images/website2/add-teacher.JPG)');
   $('#mainScreenshot1').css('height', '100vh');
   $('#screenshot-header').text('Screenshot 6');
 });
 $('#screenshot7').on('click', function() {
   $('#mainScreenshot1').css('background-image', 'url(./images/website2/showteacher.JPG)');
   $('#mainScreenshot1').css('height', '100vh');
   $('#screenshot-header').text('Screenshot 7');
 });
 $('#screenshot8').on('click', function() {
   $('#mainScreenshot1').css('background-image', 'url(./images/website2/students.JPG)');
   $('#mainScreenshot1').css('height', '100vh');
   $('#screenshot-header').text('Screenshot 8');
 });
 $('#screenshot9').on('click', function() {
   $('#mainScreenshot1').css('background-image', 'url(./images/website2/addstudents.JPG)');
   $('#mainScreenshot1').css('height', '100vh');
   $('#screenshot-header').text('Screenshot 9');
 });
 $('#screenshot10').on('click', function() {
   $('#mainScreenshot1').css('background-image', 'url(./images/website2/teacher-class.JPG)');
   $('#mainScreenshot1').css('height', '100vh');
   $('#screenshot-header').text('Screenshot 10');
 });
 $('#screenshot11').on('click', function() {
   $('#mainScreenshot1').css('background-image', 'url(./images/website2/show-student.JPG)');
   $('#mainScreenshot1').css('height', '100vh');
   $('#screenshot-header').text('Screenshot 11');
 });
</script>
</html>
