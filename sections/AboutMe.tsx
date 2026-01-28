"use client";

import {AboutMeProp } from "@/types";
import Image from "next/image";
import { CodeXml, Database, Ellipsis, Server, Wallpaper } from "lucide-react";
import { useProjectData } from "@/hooks/useProjectData";
import { useFilterSkills } from "@/hooks/useFilterSkills";

export default function AboutMe() {
  const {data, loading, error} = useProjectData<AboutMeProp>("skills", "skills");
  if (!data) return null;
  if (loading) return <p><Ellipsis/>loaging "About Me" data. Pleas wait ;)</p>
  if (error) return <p>Error to fetch About Me data :(</p>
  
  const {codeSkills, graphicSkills, dbSkills, deploySkills} = useFilterSkills(data);

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <p className="text-lg mb-8 text-neutral-300">{data.story}</p>

      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
    
      <div>
        <span className="skills_span">
          <CodeXml/>:
            {codeSkills?.map((s, i) => (
          <Image key={i} title={s.technology} src={s.icon} alt={s.technology} width={24} height={24}/>
        ))}
        </span> 
        <span className="skills_span">
          <Wallpaper/>:
            {graphicSkills?.map((s, i) => (
          <Image key={i} title={s.technology} src={s.icon} alt={s.technology} width={24} height={24}/>
        ))}
        </span> 
        <span className="skills_span">
          <Database/>:
            {dbSkills?.map((s, i) => (
          <Image key={i} title={s.technology} src={s.icon} alt={s.technology} width={24} height={24}/>
        ))}
        </span> 
        <span className="skills_span">
          <Server/>:
            {deploySkills?.map((s, i) => (
          <Image key={i} title={s.technology} src={s.icon} alt={s.technology} width={24} height={24}/>
        ))}
        </span> 
      </div>
    </div>
  );
}


