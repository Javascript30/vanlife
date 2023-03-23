function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer>
      <p className="footer--text">&copy; {year} #Vanlife</p>
    </footer>
  );
}

export default Footer;
