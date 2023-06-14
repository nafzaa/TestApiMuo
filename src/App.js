import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [categoryName, setCategoryName] = useState("");

  // useEffect(() => {
  //   axios.get("https://muoapi.map2u.com.my/index.php/api/rf/user/category").then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: categoryName
    }

    // axios header authorization
    axios.defaults.headers.common['Authorization'] = 'Bearer 2|mBPlMdtZWWbTPLhqb1aSGi8cQlwBgnLaORkffozE';

    axios.post("https://muoapi.map2u.com.my/index.php/api/rf/user/category/create", data).then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">ADD CATEGORY</h1>

              <form onSubmit={HandleSubmit}>
                <div className="mb-3">
                  <label htmlFor="categoryName" className="form-label">Category Name</label>
                  <input type="text" value={categoryName} className="form-control" id="categoryName" onChange={(e) => setCategoryName(e.target.value)} />
                </div>
                {/* button submit center */}
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
