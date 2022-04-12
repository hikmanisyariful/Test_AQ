import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Logo from "./assets/logo.png";
import Slides from "./assets/slides.png";
import Icon1 from "./assets/icon_1.png";
import Icon2 from "./assets/icon_2.png";
import Icon3 from "./assets/icon_3.png";
import Icon4 from "./assets/icon_4.png";
import Icon5 from "./assets/icon_5.png";
import Icon6 from "./assets/icon_6.png";
import Icon7 from "./assets/icon_7.png";
import Method from "./assets/langkah.png";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ height: 80 }}
      >
        <div className="container d-flex justify-content-end align-items-center">
          <button className="btn btn-primary">
            <MdKeyboardArrowLeft /> Kembali ke Pilihkartu
          </button>
        </div>
      </nav>
      {/* Logo */}
      <div className="container">
        <div className="row d-flex align-items-end">
          <div className="offset-1 col-auto">
            <img src={Logo} alt="logo AXA" />
          </div>
          <div className="col-auto">
            <h5>
              DAPATKAN ASURANSI GRATIS DARI <span className="fw-bold">AXA</span>{" "}
              LIFE INDONESIA
            </h5>
            <h2>UNTUK PEMEGANG KARTU KREDIT</h2>
          </div>
        </div>
      </div>
      {/* Slides */}
      <div className="vw-100 mt-5">
        <img src={Slides} alt="hero" style={{ width: "100%" }} />
      </div>
      {/* Icons */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">
              Keuntungan Mendaftar <span>AXA Life Indonesia</span> di Pilihkartu
            </h4>
          </div>
          <div className="col-6 mt-5">
            {/* Icon 1 */}
            <div className="row ">
              <div className="col-12 mb-5">
                <div className="row d-flex justify-content-end">
                  <div className="col-auto text-end lh-1">
                    <p className="py-0 my-0">
                      Diberikan gratis secara cuma-cuma tanpa premi,
                    </p>
                    <p className="fs-5 py-0 my-0">
                      Premi : Rp. 0,- (NOL RUPIAH)
                    </p>
                  </div>
                  <div className="col-auto">
                    <img src={Icon1} alt="premi" />
                  </div>
                </div>
              </div>
              {/* icon 2 */}
              <div className="col-12 mb-5">
                <div className="row d-flex justify-content-end">
                  <div className="col-auto text-end lh-1">
                    <p className="py-0 my-0">
                      Diberikan gratis secara cuma-cuma tanpa premi,
                    </p>
                    <p className="fs-5 py-0 my-0">
                      Premi : Rp. 0,- (NOL RUPIAH)
                    </p>
                  </div>
                  <div className="col-auto">
                    <img src={Icon2} alt="premi" />
                  </div>
                </div>
              </div>
              {/* Icon 3 */}
              <div className="col-12">
                <div className="row d-flex justify-content-end">
                  <div className="col-auto text-end lh-1">
                    <p className="py-0 my-0">
                      Diberikan gratis secara cuma-cuma tanpa premi,
                    </p>
                    <p className="fs-5 py-0 my-0">
                      Premi : Rp. 0,- (NOL RUPIAH)
                    </p>
                  </div>
                  <div className="col-auto">
                    <img src={Icon3} alt="premi" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mt-5">
            <div className="row">
              {/* icon 4 */}
              <div className="col-12 mb-5">
                <div className="row">
                  <div className="col-auto">
                    <img src={Icon4} alt="premi" />
                  </div>
                  <div className="col-auto text-start lh-1">
                    <p className="py-0 my-0">
                      Diberikan gratis secara cuma-cuma tanpa premi,
                    </p>
                    <p className="fs-5 py-0 my-0">
                      Premi : Rp. 0,- (NOL RUPIAH)
                    </p>
                  </div>
                </div>
              </div>
              {/* Icon 5 */}
              <div className="col-12 mb-5">
                <div className="row">
                  <div className="col-auto">
                    <img src={Icon5} alt="premi" />
                  </div>
                  <div className="col-auto text-start lh-1">
                    <p className="py-0 my-0">
                      Diberikan gratis secara cuma-cuma tanpa premi,
                    </p>
                    <p className="fs-5 py-0 my-0">
                      Premi : Rp. 0,- (NOL RUPIAH)
                    </p>
                  </div>
                </div>
              </div>
              {/* Icon 6 */}
              <div className="col-12 mb-5">
                <div className="row">
                  <div className="col-auto">
                    <img src={Icon6} alt="premi" />
                  </div>
                  <div className="col-auto text-start lh-1">
                    <p className="py-0 my-0">
                      Diberikan gratis secara cuma-cuma tanpa premi,
                    </p>
                    <p className="fs-5 py-0 my-0">
                      Premi : Rp. 0,- (NOL RUPIAH)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="mt-5 py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">
            Tentang <span>AXA Care Protection</span>
          </h2>
          <p className="text-center px-5 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            dolorum id aliquid hic cupiditate, quae officia quam velit impedit
            libero eos corrupti eligendi necessitatibus vero voluptatem maxime
            minus exercitationem modi.
          </p>
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <button className="btn btn-primary shadow fs-3">
                DAFTAR SEKARANG JUGA !
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Form */}
      <div className="container mt-5 py-5">
        <h2 className="text-center">
          Dapatkan Perlindungan <span>AXA Care Protection </span> Sekarang
        </h2>
        <p className="text-center mt-5 fw-bolder">
          Cukup isi data diri Anda pada form dibawah ini
        </p>
        <div className="row">
          <div className="offset-2 col-7">
            <form className="mt-3">
              {/* Name */}
              <div className="row align-items-center mb-3">
                <div className="col-5 d-flex justify-content-end">
                  <label className="form-label fw-bolder">Nama Lengkap</label>
                </div>
                <div className="col-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              {/* Birthday */}
              <div className="row align-items-center mb-3">
                <div className="col-5 d-flex justify-content-end">
                  <label className="form-label fw-bolder">
                    Tanggal Lahir (dd/mm/yy)
                  </label>
                </div>
                <div className="col-7">
                  <input type="date" className="form-control" />
                </div>
              </div>
              {/* Email */}
              <div className="row align-items-center mb-3">
                <div className="col-5 d-flex justify-content-end">
                  <label className="form-label fw-bolder">Email</label>
                </div>
                <div className="col-7">
                  <input type="email" className="form-control" />
                </div>
              </div>
              {/* No Ponsel */}
              <div className="row align-items-center mb-3">
                <div className="col-5 d-flex justify-content-end">
                  <label className="form-label fw-bolder">No Ponsel</label>
                </div>
                <div className="col-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              {/* Have credit card */}
              <div className="row align-items-center mb-3">
                <div className="col-5 d-flex justify-content-end">
                  <label className="form-label fw-bolder">
                    Memiliki Kartu Kredit
                  </label>
                </div>
                <div className="col-7">
                  <input type="checkbox" className="form-check-input me-2" />
                  <label className="form-check-label me-3">VISA</label>
                  <input type="checkbox" className="form-check-input me-2" />
                  <label className="form-check-label me-3">MASTERCARD</label>
                  <input type="checkbox" className="form-check-input me-2" />
                  <label className="form-check-label me-3">BCA CARD</label>
                  <input type="checkbox" className="form-check-input me-2" />
                  <label className="form-check-label">Lainnya</label>
                </div>
              </div>

              {/* syarat */}
              <div className="row align-items-center mb-3">
                <div className="offset-5 col-7">
                  <a className="text-center" href="/">
                    Syarat & ketentuan Aplikasi
                  </a>
                </div>
              </div>

              {/* agreement */}
              <div className="row align-items-center mb-3">
                <div className="offset-5 col-7">
                  <div className="row">
                    <div className="col-1">
                      <input type="checkbox" className="form-check-input" />
                    </div>
                    <div className="col-11 ps-0">
                      <label className="form-check-label lh-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem pariatur, fugit nobis porro sapiente nulla assumenda
                        ducimus libero incidunt aliquid vel, dicta magnam, est
                        voluptas dolorem perspiciatis. Pariatur, maxime qui.
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* button */}
              <div className="row align-items-center mb-3">
                <div className="offset-5 col-7">
                  <button className="btn btn-primary px-5">Kirim</button>
                </div>
              </div>

              {/* promo */}
              <div className="row align-items-center mb-3">
                <div className="offset-5 col-7">
                  <div className="row">
                    <div className="col-1" style={{ color: "#BEBEBE" }}>
                      *
                    </div>
                    <div className="col-11 ps-0">
                      <p className="" style={{ color: "#BEBEBE" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsum earum corrupti nulla blanditiis, fugiat
                        unde, deleniti laudantium veritatis eligendi delectus,
                        quasi quod sunt modi tempora vitae adipisci nisi
                        necessitatibus dolorum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Method */}
      <div className="bg-light p-5">
        <div className="container ">
          <div className="row ">
            <div className="col-12 text-center">
              <h3>
                4 Langkah mudah mendapatkan Asuransi{" "}
                <span>AXA Life Indonesia </span> di Pilihkartu
              </h3>
            </div>
            <div className="col-12 d-flex justify-content-center mt-5">
              <img
                src={Method}
                alt="method"
                style={{ width: "70%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer
        className="bg-primary p-3 text-white"
        style={{ fontSize: "14px" }}
      >
        <div className="row">
          <div className="offset-2 col-auto">
            Copyright (c) 2017 Pilihkartucom and AXA All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
