import Analytics from "../components/Analytics/Analytics";
import QuickActions from "../components/QuickActions";
import StatsGrid from "../components/StatsGrid";
import WelcomeCard from "../components/WelcomeCard";

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <WelcomeCard name="Vishnu" />
      <StatsGrid/>
      <QuickActions/>
      <Analytics />
    </div>
  );
};

export default DashboardHome;