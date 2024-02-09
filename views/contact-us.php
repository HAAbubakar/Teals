<!DOCTYPE html>
<html lang="en">
<?php include_once("includes/head.php") ?>

<title>Contact US</title>
<body>
  <?php include_once("includes/header.php") ?>

    <div class="contactPage">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <h1>Get in <span>touch</span></h1>
            <p>we are here for you! How can we help</p>
            <div class="formarea">

              <div class="mb-3">
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name">
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <input class="btn btn-primary" type="submit" value="Submit">
            </div>
          </div>
          <div class="col-lg-5">
            <img src="./assets/images/contactUsimg.svg" alt="image">
            <div class="contacticon">
              <div class="iconbody">

                <i class="fa-solid fa-location-dot"></i>
              </div>
              <a href="#">
                  <p>

                  A346, Block 15 Gulistan-e-Johar, Karachi, Sindh 74600
                </p>
              </a>
            </div>
            <div class="contacticon">

              <div class="iconbody">
                <i class="fa-solid fa-phone"></i>
              </div>
              <a href="#">
                  <p>

                  +92 336 3869414
                </p>
                </a>
            </div>
            <div class="contacticon">

              <div class="iconbody">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <a href="#">
                  <p>

                    dummy@gmail.com
                </p>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
   

    <?php include_once("includes/footer.php") ?>

</body>
</html>