import { Organizer, UserData } from "../users/user-response.dto";

export interface IProjectPageable {
    statusCode: number;
    message:    string;
    data:       IProject[];
    metadata:   Metadata;
}

export interface IProject {
    id:          number;
    title:       string;
    description: string;
    startDate:   Date;
    endDate:     Date;
    isActive:    boolean;
    organizer:   UserData;
}

export interface Metadata {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}

export interface IProjectUpdateResponse {
    statusCode: number;
    message:    string;
    data:       IProject[];
}

export interface IProjectCreateResponse {
    statusCode: number;
    message:    string;
    data:       ProjectCreated;
}

export interface ProjectCreated {
    title:       string;
    description: string;
    startDate:   Date;
    endDate:     Date;
    organizer:   Organizer;
    id:          number;
    isActive:    boolean;
}