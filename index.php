<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  <title>Portfolio</title>
  <link rel="stylesheet" href="./css/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200;300&family=Roboto:wght@300&display=swap" rel="stylesheet">
</head>
<body>
  
<!-- Navbar -->
<div class="bg-image">
<nav class="navbar navbar-expand-lg  navbar-light">
  <div class="container py-2">
    <a class="navbar-brand" href="#">Jan Kurt</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto text-light ">
        <a class="nav-link" href="#about">About Me</a>
        <a class="nav-link" href="#skills">Skills</a>
        <a class="nav-link" href="#contact">Contact</a>
        
      </div>
    </div>
  </div>
</nav>
<!-- Home section -->
<section class="home" id="home">
  <div class="container">
    <div class="row min-vh-100 align-items-center align-content-center">
      <div class="col-md-6 text-center">
        <img src="./images/kurt.jpg" class="rounded-circle w-100 hide">
      </div>

      <div class="col-md-6 order-md-first">
        <div class="home-text">
          <p class="text-muted mb-1">Hello I'm</p>
          <h1 class= text-uppercase fs-1 fw-bold">Jan Kurt D. Bayaras</h1>
          <h2 class="fs-4">Cloud Security Engineer</h2>
          <a href="./files/resume.pdf" class="btn-submit py-2 px-5" download >GET RESUME</a>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- home section end -->
</div>

<!-- About section -->
<section class="about py-5 " id="about">
  <div class="container-lg">
    <div class="row">
        <div class="col-lg-6 py-5">
          <div class="row">
            <div class="section-title text-center">
              <h2 class="fw-bold">About Me</h2>
            </div>
            <div class="mt-4">
              <div class="about-text">
                <p class="text-muted">I recently worked as Cloud Security Engineer at Trend Micro. I also worked as a part-time web developer
                for Trend Micro Learning Management and Reports portal. </p>
                <p class="text-muted">I'm actively looking for a job as a web developer or any related to software development.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 about-img">
        <img src="./images/about.png" alt="">
        </div>
      
    </div>
  </div>
</section>
<!-- end about -->

<!-- skills start -->
<section class="skills bg-light  py-5 " id="skills">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="skills-title text-center">
        <h2 class="mb-5">My Skills</h2>
      </div>
    </div>
  </div>
  
  <div class="row justify-content-center">
    <div class="col-md-3 col-sm-6">
      <div class="row text-center">
        <p class="fs-3 text-muted skill">HTML</p>
      </div>
      <div class="progress blue">
          <span class="progress-left">
              <span class="progress-bar"></span>
          </span>
          <span class="progress-right">
              <span class="progress-bar"></span>
          </span>
          <div class="progress-value">80%</div>
      </div>
    </div>
    <div class="col-md-3 col-sm-6">
      <div class="row text-center">
        <p class="fs-3 text-muted skill">CSS</p>
      </div>
      <div class="progress yellow" >
          <span class="progress-left ">
              <span class="progress-bar"></span>
          </span>
          <span class="progress-right">
              <span class="progress-bar"></span>
          </span>
          <div class="progress-value">60%</div>
      </div>
    </div>
    <div class="col-md-3 col-sm-6">
      <div class="row text-center ">
        <p class="fs-3 text-muted skill">JAVASCRIPT</p>
      </div>
      <div class="progress green" >
          <span class="progress-left ">
              <span class="progress-bar"></span>
          </span>
          <span class="progress-right">
              <span class="progress-bar"></span>
          </span>
          <div class="progress-value">40%</div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-md-3 col-sm-6">
      <div class="row text-center">
        <p class="fs-3 text-muted skill">PHP</p>
      </div>
      <div class="progress red" >
          <span class="progress-left ">
              <span class="progress-bar"></span>
          </span>
          <span class="progress-right">
              <span class="progress-bar"></span>
          </span>
          <div class="progress-value">50%</div>
      </div>
    </div>
    <div class="col-md-3 col-sm-6">
      <div class="row text-center">
        <p class="fs-3 text-muted skill" >MySQL</p>
      </div>
      <div class="progress pink" >
          <span class="progress-left ">
              <span class="progress-bar"></span>
          </span>
          <span class="progress-right">
              <span class="progress-bar"></span>
          </span>
          <div class="progress-value">50%</div>
      </div>
    </div>
  </div>
</section>
<!-- end skills -->

<!-- Contact Me -->
<section class="contact py-5 px-5" id="contact">
  <div class="row justify-content-center">
    <div class="col-md-6 text-center contact-phone-img">
      <img src="./images/contact.png" >
    </div>
    <div class="col-md-6">
      <div class="row">
        <div class="skills-title py-5">
          <h2 class="mb-5">Contact Information</h2>
        </div>
        <div>
          <img src="./images/gmail.png" class="contact-img " alt="">
          <span class="px-4">j.kurtbayaras@gmail.com</span>
        </div>
        <div class="py-5">
          <img src="./images/contacts.png" class="contact-img " alt="">
          <span class="px-4">09998572364 / 09565011210</span>
        </div>
        <div>
          <img src="./images/map.png" class="contact-img " alt="">
          <span class="px-4">3715 Gabong street, barangay Pinagkaisahan, Makati City, 1213</span>
        </div>
      </div>
    </div>
  </div>
</section>



</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>


</html>

