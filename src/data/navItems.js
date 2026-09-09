import {
  House,
  BookOpen,
  Bot,
  PencilLine,
  ClipboardCheck,
  BarChart3,
  ListTodo,
  UploadCloud,
  FileBarChart2,
  CalendarDays,
  Settings,
} from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", icon: House },
  { id: "learn", label: "Learn", icon: BookOpen },
  { id: "ai-tutor", label: "AI Tutor", icon: Bot },
  { id: "practice", label: "Practice", icon: PencilLine },
  { id: "quizzes", label: "Quizzes", icon: ClipboardCheck },
  { id: "progress", label: "Progress", icon: BarChart3 },
  { id: "mistakes", label: "Mistakes", icon: ListTodo },
  { id: "upload", label: "Upload", icon: UploadCloud },
  { id: "reports", label: "Reports", icon: FileBarChart2 },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "settings", label: "Settings", icon: Settings },
];
