import { AboutMeProp } from "@/types";

export function useFilterSkills(data: AboutMeProp) {
  const codeSkills = data?.skills.filter((s) => s.type === "code");
  const graphicSkills = data?.skills.filter((s) => s.type === "graphic");
  const dbSkills = data?.skills.filter((s) => s.type === "db");
  const deploySkills = data?.skills.filter((s) => s.type === "deploy");

  return { codeSkills, graphicSkills, dbSkills, deploySkills };
}
