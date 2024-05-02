import ApiService from "./shared/api.service.js";
import handlingErrors from "../helpers/handlingErrors.js";
// const BaseUrl = `${process.env.REACT_APP_DEV_URL}/api/v1/govs`;
const BaseUrl = "https://invade-apis.onrender.com/api/v1/govs"

const GovsApis = {
  // ** function to get all govs
  async getAllGovs() {
    try {
      const response = await ApiService.get(`${BaseUrl}`);
      return response;
    } catch (error) {
      return handlingErrors(error);
    }
  },
  // ** function to get gov by ID
  async getGovById(govId) {
    try {
      const response = await ApiService.get(`${BaseUrl}/${govId}`);
      return response;
    } catch (error) {
      return handlingErrors(error);
    }
  },
  // ** function to delete specific gov
  async deleteSpecificGov(govId) {
    try {
      const response = ApiService.delete(`${BaseUrl}/${govId}`);
      return response;
    } catch (error) {
      return handlingErrors(error);
    }
  }
};

export default GovsApis;
