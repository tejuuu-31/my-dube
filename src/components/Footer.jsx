import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Tejashwini. Built with React.
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/tejuuu-31"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/tejashwini-rajesh-2423813ba"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;