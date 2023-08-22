import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export function BaseTemplate() {
  return (
    <>
      <Header />

      {/* Suspense + Lazy load: trong quá trình đợi download file js về thì render ra component fallback. Khi nào xong thì render ra vào chỗ Outlet */}
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
