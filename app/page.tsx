import ChatDemo from "@/components/ChatDemo";
import CreatorDashboard from "@/components/CreatorDashboard";
import ProjectPromise from "@/components/ProjectPromise";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <>
    <ProjectPromise />
    <CreatorDashboard />
    <ChatDemo />
    <WaitlistForm />
    <Footer />
  </>
  );
}