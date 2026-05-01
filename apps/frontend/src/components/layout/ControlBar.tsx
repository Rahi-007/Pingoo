import ChatSection from "../Common/ChatSection";
import ProfileSection from "../Common/ProfileSection";
import ArchiveSection from "../Common/ArchiveSection";
import SettingSection from "../Common/SettingSection";
import { ViewType } from "./Sidebar";

interface IProps {
  value: ViewType;
}

const ControlBar = ({ value }: IProps) => {
  if (value === "chat") return <ChatSection />;
  if (value === "archive") return <ArchiveSection />;
  if (value === "settings") return <SettingSection />;
  if (value === "profile") return <ProfileSection />;
};

export default ControlBar;
