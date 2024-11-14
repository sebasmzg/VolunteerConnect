"use client";

import { useProjects } from "@/app/infraestucture/hooks/useProjects";
import CardList from "@/components/organism/projects/CardList";
import { ProjectTable } from "@/components/organism/projects/ProjectTable";

const Dashboard = () => {
  const { data, currentPage, totalPages, getProjects } = useProjects();

  const handlePageChange = (page: number) => {
    getProjects(page);
  };

  return (
    <div className="flex flex-col m-10">
      <div className="w-full">
        <CardList />
      </div>
      <div className="mt-5 w-full">
        <ProjectTable
          data={data}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Dashboard;
