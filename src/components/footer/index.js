import "./style.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="ioeman-footer">
      <div className="row">
        <div className="col-12 col-md-4 mb-2 mb-md-0">Made By SR</div>
        <div className="col-12 col-md-4 mb-2 mb-md-0">Copyright © {year}</div>
        <div className="col-12 col-md-4 mb-0">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.shrijanregmi.com"
          >
            www.shrijanregmi.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
