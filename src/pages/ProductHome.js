import React from 'react'
import heroImage from '../images/hero-image.jpg';
import chairImage from '../images/armchair.jpg';
import { Link } from 'react-router-dom';
import Footer from "../layout/Footer.js"
import Sidebar from "../layout/Sidebar.js"

function ProductHome() {
  return (
    <div>
                <div class="bg-img bg-cover" style={{backgroundImage: "url(" + heroImage + ")", height:"100%", width:"100%"}} alt="..."></div>
                <main>
                
                <div class="hero-image position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
                    <div class="col-md-5 p-lg-5 mx-auto pt-5 my-5">
                    <h1 class="display-4 fw-normal text-white">Modern Made Easy</h1>
                    <p class="lead fw-normal text-white">Refresh your home with our latest styles. From fixtures to decor, we have everything you need to give your space the sleek aesthetic that it deserves.</p>
                    <a class="btn btn-outline-success text-white" href="#shop">Shop Now</a>
                    </div>
                </div>

                <div id="shop" class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                        <Link class=" text-white" to="/lighting">
                        <u><h2 class="display-5">Lighting</h2></u>
                        </Link>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-light shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
                    </div>
                    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 p-3">
                        <Link class="text-dark" to="/chairs">
                        <u><h2 class="display-5">Chairs</h2></u>
                        </Link>
                        <p class="lead">Sitting prettier than ever.</p>
                    </div>
                    <div class="armchair-image mx-auto" style={{backgroundImage: "url(" + chairImage + ")", width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
                    </div>
                </div>

                <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 p-3">
                        <Link class="text-dark" to="/tables">
                        <u><h2 class="display-5">Tables</h2></u>
                        </Link>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-dark shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
                    </div>
                    <div class="bg-secondary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                        <Link class="text-white" to="/beds">
                        <u><h2 class="display-5">Beds</h2></u>
                        </Link>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-light shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
                    </div>
                </div>

                <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                        <Link class=" text-white" to="/arearugs">
                        <u><h2 class="display-5">Area Rugs</h2></u>
                        </Link>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-body shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
                    </div>
                    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 py-3">
                        <Link class="text-dark" to="/decor">
                        <u><h2 class="display-5">Decor</h2></u>
                        </Link>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-dark shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
                    </div>
                </div>

                </main>

                <Footer />
    </div>
  )
}

export default ProductHome