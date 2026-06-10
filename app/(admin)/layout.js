import { notFound } from "next/navigation";
import { Sidebar } from "./admin/_components/sidebar";
import { getAdmin } from "@/actions/admin";
import Footer from "@/components/footer";

export default async function AdminLayout({ children }) {
  let admin;
  try {
    admin = await getAdmin();
  } catch (e) {
    console.error("getAdmin error:", e.message);
    return notFound();
  }

  if (!admin?.authorized) {
    return notFound();
  }

  return (
    <div className="h-full">
      <div className="flex max-h-screen w-56 flex-col top-20 fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}
        <Footer/>
      </main>
    </div>
  );
}
