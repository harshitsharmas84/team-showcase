// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TeamMemberCard from "./components/TeamMemberCard.jsx";
import As from "./As.jsx";
const Members = [
  { id: 1, name: "ASD", title: "Enginner" },
  { id: 2, name: "asd", title: "Enginnmer" },
  { id: 3, name: "ASD", title: "Enginner" },
  { id: 4, name: "ASD", title: "Enginner" },
];
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* {Members.map((member) => { */}
              <TeamMemberCard name={Members[0].name} title={Members[0].title} />
              <TeamMemberCard name={Members[1].name} title={Members[1].title} />
              {/* })} */}
            </div>
          }
        />
        <Route path="/as" element={<As />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
