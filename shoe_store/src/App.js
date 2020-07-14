import React from "react";
import logo from "./logo.svg";
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
  Outlet,
  useParams,
} from "react-router-dom";
import "./App.css";
import history from "./history";
// import bg from "./shoe/bg (2).jpg";
import store_logo from "./shoe/bg.jpg";

import shoe_1 from "./shoe/shoe_1.jpg";
import shoe_2 from "./shoe/shoe_2.jpg";
import shoe_3 from "./shoe/shoe_3.jpg";
import shoe_4 from "./shoe/shoe_4.jpg";
import shoe_5 from "./shoe/shoe_5.jpg";
import shoe_6 from "./shoe/shoe_6.jpg";
import shoe_7 from "./shoe/shoe_7.jpg";
import shoe_8 from "./shoe/shoe_8.jpg";
import shoe_9 from "./shoe/shoe_9.jpg";
import shoe_10 from "./shoe/shoe_10.jpg";
import shoe_11 from "./shoe/shoe_11.jpg";
import shoe_12 from "./shoe/shoe_12.jpg";
import shoe_13 from "./shoe/shoe_13.jpg";
import shoe_14 from "./shoe/shoe_14.jpg";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="header">
          <Link to="/">{/* <img src = {store_logo} height = '100'/> */}</Link>
          <Link to="/">Home</Link>
          <Link to="/store/">Store</Link>
          <Link to="/contact_us">Contact Us</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<MyStoreHead />}>
            <Route path="/" element={<MyStore />} />
            <Route path=":model" element={<MyProduct />} />
          </Route>
          <Route path="/contact_us" element={<ContactUs />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div className="home">
      <div className="img-container">
        <button>
          <Link to="/store/">Discover More</Link>
        </button>
      </div>
      <div className="card-container">
        {products.map((el) => {
          return <Card name={el.model} img={el.src} />;
        })}
      </div>
    </div>
  );
};

const Card = ({ name, img }) => {
  return (
    <div
      className="card"
      style={{
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "500px",
        width: "400px",
      }}
    >
      <div className="card-img">
        <div className="item-name">
          <span>{name}</span>
        </div>
        <Link style={{ textDecoration: "none" }} to={`/store/${name}`}>
          <div className="item-buy">
            <span> Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const MyStoreHead = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
const MyStore = () => {
  return (
    <div>
      <div className="card-container">
        {products.map((el) => {
          return <Card name={el.model} img={el.src} />;
        })}
      </div>
      {/* <Outlet /> */}
    </div>
  );
};
const MyProduct = () => {
  const { model } = useParams();
  let product = products.find((el) => {
    return el.model == model;
  });
  console.log(product);
  return (
    <div className="product">
      <div className="flex-box">
        <h3>Product Name</h3>
        <div>{product.model}</div>
      </div>
      <div style={{ minWidth: "300px", width: "300px" }}>
        <div className="card-img-container">
          <img width="300px" src={product.src} />
        </div>
        <div className="flex-box">
          <h3>Brand Name</h3>
          <div>UV</div>
        </div>
        <div className="flex-box">
          <h3>Price</h3>
          <div>{product.price}</div>
        </div>
      </div>
    </div>
  );
};


const ContactUs = (e) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const sendMessage = ()=>{
    alert("This is just a dummy contact-us form")
  }
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="flex-box">
        <div className="flex-item">Name</div>
        <div>
          <input
            onChange={handleName}
            placeholder="Enter your full name"
            className="input"
            value={name}
          />
        </div>
      </div>
      <div className="flex-box">
        <div className="flex-item">Email</div>
        <div>
          <input
            onChange={handleEmail}
            placeholder="Enter your Email"
            className="input"
            value={email}
          />
        </div>
      </div>
      <div className="flex-box">
        <div className="flex-item">Message</div>
        <div>
          <textarea
            onChange={handleMessage}
            placeholder="Enter your message"
            className="textarea"
            rows="4"
            value={message}
          ></textarea>
        </div>
      </div>
      <button className="btn" onClick = {sendMessage}>Send Message</button>
    </div>
  );
};

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Not Found</h2>
      <div>Sorry the requested page Not Found.</div>
    </div>
  );
};
let products = [
  {
    model: "UV Model 01",
    src: shoe_1,
    price: "1000$",
  },
  {
    model: "UV Model 02",
    src: shoe_2,
    price: "1000$",
  },
  {
    model: "UV Model 03",
    src: shoe_3,
    price: "1000$",
  },
  {
    model: "UV Model 04",
    src: shoe_4,
    price: "1000$",
  },
  {
    model: "UV Model 05",
    src: shoe_5,
    price: "1000$",
  },
  {
    model: "UV Model 06",
    src: shoe_6,
    price: "1000$",
  },
  {
    model: "UV Model 07",
    src: shoe_7,
    price: "1000$",
  },
  {
    model: "UV Model 08",
    src: shoe_8,
    price: "1000$",
  },
  {
    model: "UV Model 09",
    src: shoe_9,
    price: "1000$",
  },
  {
    model: "UV Model 10",
    src: shoe_10,
    price: "1000$",
  },
  {
    model: "UV Model 11",
    src: shoe_11,
    price: "1000$",
  },
  {
    model: "UV Model 12",
    src: shoe_12,
    price: "1000$",
  },
  {
    model: "UV Model 13",
    src: shoe_13,
    price: "1000$",
  },
  {
    model: "UV Model 14",
    src: shoe_14,
    price: "1000$",
  },
];

export default App;
