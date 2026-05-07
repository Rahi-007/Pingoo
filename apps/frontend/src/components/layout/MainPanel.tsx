import DefaultDashboard from "../Common/DefaultDashboard";
import SettingDashboard from "../Common/SettingDashboard";
import type { ViewType } from "./Sidebar";

interface IProps {
  value: ViewType;
}

const MainPanel = ({ value }: IProps) => {
  if (value === "chat") return <DefaultDashboard />;
  if (value === "archive") return <DefaultDashboard />;
  if (value === "settings") return <SettingDashboard />;
  if (value === "profile") return <DefaultDashboard />;
};

export default MainPanel;
