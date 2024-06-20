import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import CarouselHome from "../components/carousel";

export default function Home() {

    const [open, setOpen] = useState('0');
    const toggle = (id: string) => {
        if (open === id) {
            setOpen('0');
        } else {
            setOpen(id);
        }
    };

    return (
        <>
           <header className="header">
      <div className="row align-items-center">
        <div className="col-sm container-left">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <a href="/find-cars" className="btn btn-primary mt-3"
            >Mulai Sewa Mobil</a>
        </div>
        <div className="col-sm mt-5 mt-col-0">
          <div className="d-flex justify-content-end">
            <img className="header__image" src="./images/img_car-2.png" alt="" />
          </div>
        </div>
      </div>
    </header>

    <section className="services container" id="our-service"> 
      <div className="row">
        <div className="d-flex justify-content-center align-items-center col-sm-6">
          <img className="service__image" src="./images/img_service.png" alt="" />
        </div>
        <div className="services__right col-sm-6 d-flex justify-content-center">
          <div className="services__wrapper">
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className="">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="service__describes">
              <div className="service__describe">
                <div className="image__icon">
                  <img src="./images/group-53.png" alt="" />
                </div>
                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
              </div>
              <div className="service__describe">
                <div className="image__icon">
                  <img src="./images/group-53.png" alt="" />
                </div>
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
              </div>
              <div className="service__describe">
                <div className="image__icon">
                  <img src="./images/group-53.png" alt="" />
                </div>
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
              </div>
              <div className="service__describe">
                <div className="image__icon">
                  <img src="./images/group-53.png" alt="" />
                </div>
                <p>Layanan Airport Transfer / Drop In Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

            <section className="whyuse-section">
                <div className="container">
                    <div className="header__why-use">
                        <h2>Why Us?</h2>
                        <p>Mengapa harus pilih Binar Car Rental?</p>
                    </div>
                    <div className="body__why-uses">
                        <article className="why-use" data-aos="fade-up" data-aos-duration="3000">
                            <span className="why-use__icon">
                                <i className="uil uil-thumbs-up"></i
                                ></span>
                            <h3>Mobil Lengkap</h3>
                            <p>
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                                terawat
                            </p>
                        </article>
                        <article
                            className="why-use"
                            data-aos="fade-down"
                            data-aos-duration="3000"
                        >
                            <span className="why-use__icon"> <i className="uil uil-tag-alt"></i></span>
                            <h3>Harga Murah</h3>
                            <p>
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                                mobil lain
                            </p>
                        </article>
                        <article className="why-use" data-aos="fade-up" data-aos-duration="3000">
                            <span className="why-use__icon"> <i className="uil uil-clock"></i></span>
                            <h3>Layanan 24 Jam</h3>
                            <p>
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                tersedia di akhir minggu
                            </p>
                        </article>
                        <article
                            className="why-use"
                            data-aos="fade-down"
                            data-aos-duration="3000"
                        >
                            <span className="why-use__icon">
                                <i className="uil uil-award-alt"></i
                                ></span>
                            <h3>Sopir Profesional</h3>
                            <p>
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                                tepat waktu
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section-testimonial">
                <div className="header__testimonial">
                    <h2>Testimonial</h2>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
                <div className="owl-carousel owl-theme">
                <CarouselHome />
                </div>
            </section>

            <section className="section-ctaBanner container">
                <div className="bg__ctaBanner">
                    <div className="ctaBanner__deskripsi">
                        <div className="deskripsi">
                            <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <a href="courses.html" className="btn btn-primary">Mulai Sewa Mobil</a>
                    </div>
                </div>
            </section>

            <section className="sections-faqs">
                <div className="container faqs">
                    <div className="faqs__description">
                        <h2>Frequently Asked Question</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>

                    <Accordion className="" open={open} toggle={toggle}>
                        <AccordionItem  >
                            <AccordionHeader targetId="1">
                               asdas
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                             asdas
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem  >
                            <AccordionHeader targetId="2">
                               asdas
                            </AccordionHeader>
                            <AccordionBody accordionId="2">
                             asdas
                            </AccordionBody>
                        </AccordionItem>

                    </Accordion>
                </div>
            </section>

        </>
    )
}