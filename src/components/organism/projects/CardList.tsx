"use client";

import React from "react";
import { Card } from "@/components/molecules/Card";
import { LuBarChart2 } from "react-icons/lu";
import { LuFolderOpen } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { useProjects } from "@/app/infraestucture/hooks/useProjects";

const CardList = () => {
  const { totalOrganizers, totalProjects, activeProjects, nextProject } = useProjects();
  return (
    <div className="flex w-full justify-evenly">
      <Card title="Total Proyectos" icon={<LuFolderOpen />}>
        {totalProjects}
      </Card>
      <Card title="Proyectos Activos" icon={<LuBarChart2 />}>
        {activeProjects}
      </Card>
      <Card title="Organizadores" icon={<LuUsers />}>
        {totalOrganizers}
      </Card>
      <Card title="Próximo proyecto" icon={<LuCalendar />}>
        <span>{nextProject?.title}</span>
      </Card>
    </div>
  );
};

export default CardList;
