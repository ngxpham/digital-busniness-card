function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="img">
          <img
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/276993396_1198439360986416_8463164533664238048_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hI1DtBPcU-0AX_sDJ0f&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8fBPeUpL2Zu9PEZsqWdAh8NTXQINYmVsnRChXsc024Sw&oe=630E5B69"
            alt="avatar"
          />
        </div>
        <div className="content">
          <div className="content-title">
            <h3>Nguyen Pham</h3>
            <p>Designer/Frontend</p>
            <span>github.com/ngxpham</span>
          </div>
          <div className="contact">
            <button className="mail">
              <img
                src="https://img.icons8.com/material-rounded/96/000000/mail.png"
                height="14px"
              />
              <span>Email</span>
              <span className="detail">ngxpham@gmail.com</span>
            </button>
            <button className="phone">
              <img
                src="https://img.icons8.com/ios-glyphs/90/000000/phone--v1.png"
                height="14px"
              />
              <span>Phone</span>
              <span className="detail">032 979 1516</span>
            </button>
          </div>
          <div className="content-desc">
            <h4>About</h4>
            <p>
              Staring with a Graphic Design degree,I have worked in many
              different professions and i’m willing to learn new knowledge to
              serve my work. As an independent person,I’m looking for an
              environment where I can CONTRIBUTE and GROW.
            </p>
            <h4>Interests</h4>
            <p>Academy Art, Book, Coffee, Travel</p>
          </div>
        </div>
        <div className="social">
          <a href="https://facebook.com/phamnguyen2311" target="_blank">
            <img src="https://img.icons8.com/metro/104/000000/facebook.png" />
          </a>
          <a href="https://instagram.com/ngxpham" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1400/1400829.png" />
          </a>
          <a href="https://www.linkedin.com/in/ngxpham" target="_blank">
            <img src="https://img.icons8.com/metro/104/000000/linkedin.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Card />, document.getElementById("card"));
