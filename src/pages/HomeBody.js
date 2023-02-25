import React from 'react'
import "../Css/homebody.css";

export default function HomeBody() {
  return (
    <div>
      <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-0 feature-row">
      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="feature-item border h-100 p-5">
          <div className="btn-square bg-light rounded-circle mb-4" style={{width: '64px', height: '64px'}}>
            <img className="img-fluid" src="images/education.png" alt="Icon" />
          </div>
          <h5 className="mb-3">Students</h5>
          <p className="mb-0">Empowers students to create job profiles, search, and apply for jobs and internships; instant job matching that takes their career to the next level</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
        <div className="feature-item border h-100 p-5">
          <div className="btn-square bg-light rounded-circle mb-4" style={{width: '64px', height: '64px'}}>
            <img className="img-fluid" src="images/enterprise.png" alt="Icon" />
          </div>
          <h5 className="mb-3">Companies</h5>
          <p className="mb-0">Create multiple job postings and get instant access to the entire students' database to match them based on skills, GPA, and certificates for the best hiring experience.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
        <div className="feature-item border h-100 p-5">
          <div className="btn-square bg-light rounded-circle mb-4" style={{width: '64px', height: '64px'}}>
            <img className="img-fluid" src="images/group.png" alt="Icon" />
          </div>
          <h5 className="mb-3">Placement Team</h5>
          <p className="mb-0">Attract several companies and manage them from a centralized place; capture data and reports related to students and employers in a single click, securely.</p>
        </div>
      </div>
     
    </div>
  </div>
  </div>


  <h1 class="display-5 mb-5">What Clients Say About Our Services!</h1>

  <div className="container container1 mx-auto mt-5 col-md-10 col-11">
  
  <div className="row" style={{justifyContent: 'center'}}>
    <div className="card col-md-3 col-11">
      <div className="card-content">
        <div className="card-body p-0">
          <div className="profile mb-4 mt-3"> <img src="https://i.imgur.com/Ur43esv.jpg" /> </div>
          <div className="card-subtitle">
            <p> <small className="text-muted"> <i className="fas fa-quote-left" /> I expected anything less than perfect for the team of experts. They are the best team ever! <i className="fas fa-quote-left fa-flip-horizontal" /> </small> </p>
          </div>
          <div className="card-body company"> <i className="fab fa-ebay fa-2x" /> <small className="intro text-muted">Sam Diago, Marketer</small> </div>
        </div>
      </div>
    </div>
    <div className="card col-md-3 col-11 second">
      <div className="card-content">
        <div className="card-body p-0">
          <div className="profile mb-4 mt-3"> <img src="https://i.imgur.com/8RKXAIV.jpg" /> </div>
          <div className="card-subtitle">
            <p> <small className="text-muted"> <i className="fas fa-quote-left " /> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing <i className="fas fa-quote-left fa-flip-horizontal" /> </small> </p>
          </div>
          <div className="card-body company"> <i className="fab fa-amazon fa-2x" /><small className="intro text-muted">Monty Jones, Software Developer</small> </div>
        </div>
      </div>
    </div>
    <div className="card col-md-3 col-11 third">
      <div className="card-content">
        <div className="card-body p-0">
          <div className="profile mb-4 mt-3"> <img src="https://i.imgur.com/J6l19aF.jpg" /> </div>
          <div className="card-subtitle">
            <p> <small className="text-muted"> <i className="fas fa-quote-left" /> I always wanted cool videos of my concerts never knew whom to talk to but they are amazing! <i className="fas fa-quote-left fa-flip-horizontal" /> </small> </p>
          </div>
          <div className="card-body company"> <i className="fab fa-yelp fa-2x" /><small className="intro text-muted">John Tim, Tech Support</small> </div>
        </div>
      </div>
    </div>
  </div>
</div>




<h1 class="display-5 mb-5">Our Best achievement!!!</h1>

{/* Carousel wrapper */}
<div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
  {/* Controls */}
  
  
  {/* Inner */}
  <div className="carousel-inner py-4">
    {/* Single item */}
    <div className="carousel-item active">
      <div className="container container1">
        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">Anna Deynah</h5>
            <p>UX Designer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
            </ul>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">John Doe</h5>
            <p>Web Developer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li>
                <i className="fas fa-star-half-alt fa-sm" />
              </li>
            </ul>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">Maria Kate</h5>
            <p>Backend Developer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="far fa-star fa-sm" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Single item */}
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">John Doe</h5>
            <p>UX Designer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
            </ul>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">Alex Rey</h5>
            <p>Web Developer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li>
                <i className="fas fa-star-half-alt fa-sm" />
              </li>
            </ul>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="far fa-star fa-sm" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Single item */}
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">Anna Deynah</h5>
            <p>UX Designer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
            </ul>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">John Doe</h5>
            <p>Web Developer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li>
                <i className="fas fa-star-half-alt fa-sm" />
              </li>
            </ul>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="far fa-star fa-sm" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Inner */}
</div>
{/* Carousel wrapper */}

    </div>
  )
}
