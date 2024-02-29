import "./Footer.css";
export const Footer = () => {
  return (
    <div>
      <div className="sticky-footer">
        <footer>
          <div className="footer-content">
            <div className="col-1">
              <div className="uselink">
                <h3>USEFUL LINKS</h3>
              </div>
              <ul>
                <li>
                  <a href="./About">About</a>
                </li>
                <li>
                  <a href="./Contact">Contact</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <div className="link">
                <h3>LINKS</h3>
              </div>
              <ul>
                <li>
                  <a href="#">link1</a>
                </li>
                <li>
                  <a href="#">link2</a>
                </li>
                <li>
                  <a href="#">link3</a>
                </li>
                <li>
                  <a href="#">link4</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>FOLLOW US</h3>
              <div className="socials-links">
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="https://instagram.com/sumithmadupu?igshid=ZDc4ODBmNjlmNQ==" target="_blank">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Copyright ©2023 SHIKSHA Ekikaran . designed by <span>sumith</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
