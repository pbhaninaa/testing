import React, { useState, useEffect } from "react";
import fetchMetadata from "./metadataService";

const App = ({ id }) => {
  const [metadata, setMetadata] = useState("");
  // const [question, setQuestion] = useState('');
  var questions = ([] = []);
  var attr = [];
  useEffect(() => {
    const getMetadata = async () => {
      const data = await fetchMetadata(id);
      attr = data;
      console.log("I am app " + data);
      setMetadata(data);
    };
    getMetadata();
  }, [id]);
  if (!metadata) {
    return <div>Loading metadata...</div>;
  }
  console.log("me "+metadata);
  const names = ([] = []);
  for (let i = 1; i < metadata.attributes.metadata.attributes.length; i++) {
    questions.push(metadata.attributes.metadata.attributes[i].question);
    names.push(metadata.attributes.metadata.attributes[i].name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4 className="heading"></h4>
        <div className="container">
          <form>
            <div className="row">
              <div className="col-4 mt-3">
                <label htmlFor="ModelName">Model Name:</label>
              </div>
              <div className="col-8 mt-3">
                <input
                  type="text"
                  id="ModelName"
                  value={metadata.attributes.name}
                />
              </div>
            </div>
            <div className="row">
              {questions.map((question, i) => (
                <>
                  <div className="col-4 mt-3">
                    <label htmlFor="Question">{question}</label>
                  </div>
                  <div className="col-8 mt-3">
                    <input type="text" id="Question" value="" />
                  </div>

                  <div className="col-4 mt-3">
                    <label htmlFor="name">{names[i]}</label>
                  </div>
                  <div className="col-8 mt-3">
                    <input type="text" id="name" value="" />
                  </div>
                </>
              ))}
            </div>
          </form>
        </div>
      </header>
    </div>
  );
};

export default App;
