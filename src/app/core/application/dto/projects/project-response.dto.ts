import { UserData } from "../users/user-response.dto";

export interface IProjectResponse {
    statusCode: number;
    message:    string;
    data:       Datum[];
    metadata:   Metadata;
}

export interface Datum {
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
