"use client";

import { IProjectPageable } from "@/app/core/application/dto/projects/project-response.dto"
import { IUserResponse } from "@/app/core/application/dto/users/user-response.dto";
import { EndPointProjects } from "@/app/core/application/model/projects.enum"
import { EndPointUsers } from "@/app/core/application/model/users.enum";
import { get } from "http";
import { useEffect, useState } from "react"

export const useProjects = () => {
    const [data, setData] = useState<IProjectPageable | null>(null)
    const [users, setUsers] = useState<IUserResponse | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)

    const getProjects = async (page: number = 1, size: number = 9) => {
        const response = await fetch(`${EndPointProjects.GET_ALL}?page=${page}&size=${size}`);
        if(!response.ok){
            console.error("Error getting projects", response.statusText);
            return;
        }
        const data = await response.json();
        setData(data);
        setCurrentPage(data.metadata.currentPage);
        setTotalPages(data.metadata.totalPages);
    }

    const getUsers = async ()=>{
        const response = await fetch(EndPointUsers.get_users);
        if(!response.ok){
            console.error("Error getting users", response.statusText);
            return;
        }
        const users = await response.json();
        setUsers(users);
    }

    useEffect(()=>{
        getUsers();
    },[])

    useEffect(()=>{
        getProjects(currentPage);
    },[currentPage])

    const totalProjects = data?.metadata.totalItems || 0;
    const activeProjects = data?.data.reduce((count, project)=>{
        return project.isActive ? count + 1 : count;
    },0 || 0)
    const totalOrganizers = users?.data.reduce((count, user)=>{
        return user.role === "organizer" ? count + 1 : count;
    },0 || 0)
    const nextProject = data
    ? data.data
        .filter(project => new Date(project.startDate) > new Date())
        .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())[0]
    : null;

    return {
        data,
        currentPage,
        totalPages,
        getProjects,
        totalProjects,
        totalOrganizers,
        activeProjects,
        nextProject,
    }
}