
import { useState } from "react";
import { useEffect } from "react";
import  {HomePage}  from "./pages/Home.jsx";
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import { NotFoundPage } from "./pages/404.jsx";
import { SearchPage } from "./pages/Search.jsx";


function App() {
  const [currentPage,setCurrentPage] =useState(window.location.pathname);

  let pages = <NotFoundPage />;
  if (currentPage=== "/"){
    pages = <HomePage />;
  }
  if(currentPage === "/search"){
    // const { SearchPage } = await import("./pages/Search.jsx");
    pages = <SearchPage />;
  };

  useEffect(()=>{
    const handleLocationChange= () =>{
      setCurrentPage( window.location.pathname);

    }
    window.addEventListener("popstate", handleLocationChange);
    
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };

  },[])
  return (
    <>
      <Header />
      {pages}
      <Footer />
    </>
  );
}
export default App;
