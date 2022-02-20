import { colors } from "../../styles/colors";
import { ToolTip, ToolTipText} from "./styles"

interface ToolTipProps {
  children: React.ReactNode,
  text: string
}
export const Tooltip = ({ children, text }: ToolTipProps) => (
  <ToolTip>
    <span style={{ color: colors.secondaryFont }}>{children}</span>
    <ToolTipText>{text}</ToolTipText>
  </ToolTip>
);