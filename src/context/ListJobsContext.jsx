import { useContext, createContext, useState, useEffect } from "react";
import { getJobs } from "../api/jobs";
const ListJobsContext = createContext();

export const listJobs = () => {
  return useContext(ListJobsContext);
};

export const ListJobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filterJobs, setFilterJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getJobs();
        setJobs(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ListJobsContext.Provider
      value={{ jobs, filterJobs, setFilterJobs, isLoading }}
    >
      {children}
    </ListJobsContext.Provider>
  );
};
