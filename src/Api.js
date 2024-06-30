import axios from "axios";

const apiUrl = "https://api.adviceslip.com/advice";
export const fetchAdvice = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.slip;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};
function App() {
  return <div></div>;
}

export default App;
