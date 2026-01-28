"use client";

import { useProjectData } from "@/hooks/useProjectData";
import { CvProps } from "@/types";
import { BrainCircuit, Ellipsis } from "lucide-react";


export default function Cv() {

 const {data, loading, error} = useProjectData<CvProps>("cv", "cv");

 if (!data) return null;
 if (loading) return <p><Ellipsis/>loaging my data. Pleas wait ;)</p>
 if (error) return <p>Error to fetch CV data :(</p>

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <h3 className="text-lg text-white/80 font-bold mb-2">{data.area}</h3>
      <h4 className="text-md text-white/60 mb-6">{data.location}</h4>
      <ul className="text-white/80 mb-12">
        <li className="flex gap-2 mb-2"><BrainCircuit/>{data.skills.competence_1}</li>
        <li className="flex gap-2 mb-2"><BrainCircuit/>{data.skills.competence_2}</li>
        <li className="flex gap-2 mb-2"><BrainCircuit/>{data.skills.competence_3}</li>
        <li className="flex gap-2 mb-2"><BrainCircuit/>{data.skills.competence_4}</li>
        <li className="flex gap-2 mb-2"><BrainCircuit/>{data.skills.competence_5}</li>
      </ul>

      <h2 className="text-2xl font-bold mb-6">Education</h2>
        {data.education.map((e, i) => (
          <div key={i} className="mb-6 gap-2">
            <h3 className="text-lg font-bold mb-2">{e.institution}</h3>
            <h4 className="text-md text-white/80 mb-2">{e.formation}</h4>
            <h5 className="text-base text-white/60 mb-2">{e.degree}</h5>
          </div>
        ))}
      
      <h2 className="text-2xl mb-6">Languages</h2>
      {data.languages.map((l, i) => (
        <div key={i}>
          <h3 className="text-lg mb-2">{l.lang} - {l.level}</h3>
        </div>
      ))}

      
    </div>
  );
}
