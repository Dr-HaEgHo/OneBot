import Overview from "@/components/overview/Overview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ChatBoomer - Dashboard',
  description: 'Learn and get better at industry trading secrets',
}


const page = () => {

  return (
    <div className="w-full h-full bg-white ">
      <div className="dash-container">
        <Overview/>
      </div>
    </div>
  );
};

export default page;
