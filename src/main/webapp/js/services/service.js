const service = {
    fetchData: async (serviceUrl, data) => {
      try{
        const response = await fetch(serviceUrl, data || null);
        try{
          return await response.json();
        }
        catch(parseJSONError){
          console.error(`parseJSON failed: ${parseJSONError}`);
        }
      }
      catch (error){
        console.error(`Fetch data failed: ${error}`);
      }
    },
    postData: async (serviceUrl, settings) => {
      return service.fetchData(serviceUrl, settings);
    }
}
export default service;