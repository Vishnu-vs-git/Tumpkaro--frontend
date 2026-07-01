import StatsGrid from "../components/StatsGrid";
import WelcomeCard from "../components/WelcomeCard";

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <WelcomeCard name="Vishnu" />
      <StatsGrid/>
    </div>
  );
};

export default DashboardHome;