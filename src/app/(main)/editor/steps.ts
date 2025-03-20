import { EditorFormProps } from "@/lib/types";
import EducationForm from "./forms/EducationForm";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import InterestForm from "./forms/InterestForm";
import ProjectsForm from "./forms/ProjectsForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal info", component: PersonalInfoForm, key: "personal-info" },
  {
    title: "Work Experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  {
    title: "Your Projects",
    component: ProjectsForm,
    key: "projects",
  },
  { title: "Academics", component: EducationForm, key: "education" },
  { title: "Skills", component: SkillsForm, key: "skills" },
  {
    title: "Summary",
    component: SummaryForm,
    key: "summary",
  },
  {
    title: "Interests",
    component: InterestForm,
    key: "interests",
  }
];
