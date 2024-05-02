// ** Import hooks
import { useState, useEffect } from "react";

// ** Import Govs Apis services
import GovsApis from "../../apis/govs.apis";

// ** Import page components
import GridDetails from "../../components/GridDetails";

// ** React router imports
import { useParams } from 'react-router-dom';

function Details() {
  // ** hooks
  const { govId } = useParams();

  // ** states
  const [specificGov,  setSpecificGov] = useState(null);

  // ** Function to get gov by id
  const getGovById = async (id) => {
    const response = await GovsApis.getGovById(id);
    if (response) {
      setSpecificGov(response.data.data)
    }
  }

  // ** use effect to get gov by id after rendering and updating govId 
  useEffect(() => {
    getGovById(govId);
}, [govId]);


  return (
    <GridDetails specificObject={specificGov} />
  )
}

export default Details;