import {
  Eye,
  EyeOff,
  Instagram,
  LockKeyhole,
  MailCheck
} from "lucide-react-native";
import { cssInterop } from "nativewind";

function interopIcon(icon: any) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}

interopIcon(MailCheck);
interopIcon(LockKeyhole);
interopIcon(Eye);
interopIcon(EyeOff);
interopIcon(Instagram);