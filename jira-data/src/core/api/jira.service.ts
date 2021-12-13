// import {
//   CountryCode,
//   CreateHdCustomerVehicleRequest,
//   HdCustomerVehicleListResponse,
//   VehiclePriceCategoryListResponse,
// } from "../dataTypes/types";
// import httpService from "../services/http.service";
// import { transformCountryCodes } from "@/core/transformers/accountService.transformer";
// import { transformVehicleList } from "@/core/transformers/vehicleService.transformer";
    // .get<never>(`/rest/api/2/events`)
import http from "@/core/services/http.service";

export const getIssue = (): Promise<any> =>
  http
    .get<never>(`/rest/agile/1.0/board`)
    .then((response) => response.data);
