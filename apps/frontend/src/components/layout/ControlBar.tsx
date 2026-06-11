import ChatSection from "../Common/ChatSection";
import ProfileSection from "../Common/ProfileSection";
import ArchiveSection from "../Common/ArchiveSection";
import SettingSection from "../Common/SettingSection";
import { ViewType } from "./Sidebar";

interface IProps {
  value: ViewType;
  setShowHome: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlBar = ({ value, setShowHome }: IProps) => {
  if (value === "chat") return <ChatSection setShowHome={setShowHome} />;
  if (value === "archive") return <ArchiveSection />;
  if (value === "settings") return <SettingSection />;
  if (value === "profile") return <ProfileSection />;
};

export default ControlBar;
