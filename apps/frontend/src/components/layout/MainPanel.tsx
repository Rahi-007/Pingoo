import type { ViewType } from "./Sidebar";
import DefaultDashboard from "../Common/DefaultDashboard";

interface IProps {
  value: ViewType;
}

const MainPanel = ({ value }: IProps) => {
  if (value === "chat") return <DefaultDashboard />;
  if (value === "archive") return <DefaultDashboard />;
  if (value === "settings") return <DefaultDashboard />;
  if (value === "profile") return <DefaultDashboard />;
};

export default MainPanel;
