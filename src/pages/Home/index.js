import React from "react";
import Navbar from "../../components/navbar";
import CoverHome from "../../components/home/cover";
import BestPractice from "../../components/home/bestPractice";
import RecentUpdate from "../../components/home/recentUpdate";
import YourHistory from "../../components/home/yourHistory";
import Statistics from "../../components/home/statistic";
import Sponsor from "../../components/home/sponsor";
import Footer from "../../components/footer";
import Cookies from "universal-cookie";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const cookies = new Cookies();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      <Navbar page={"home"} />
      <CoverHome />
      <BestPractice />
      <RecentUpdate />
      {isLogin && <YourHistory />}
      <Statistics />
      <Sponsor />
      <Footer />
    </div>
  );
};

export default Home;
