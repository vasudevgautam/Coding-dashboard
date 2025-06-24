import { useState, useEffect } from "react";
import axios from "axios";

export const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/questions")
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { questions, loading };
};
