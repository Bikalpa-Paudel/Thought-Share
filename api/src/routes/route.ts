import router from '../index';

router.get("api/contact", (req, res) => {
    res.send("<h1>Contact</h1>");
  });