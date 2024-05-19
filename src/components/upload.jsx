import React, { useState } from "react";
import Papa from "papaparse";
import Table from "./table";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [array, setArray] = useState([]);

  console.log(array);

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setArray([]);
  };

  const handleClick = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const text = event.target.result;
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setArray(result.data);
          },
        });
      };
      reader.readAsText(selectedFile);
    } else {
      alert("Please select a file");
    }
  };

  const handleBrowseClick = () => {
    document.getElementById("fileInput").click();
    setArray([]);
    setSelectedFile(null);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <div style={sx.navbar}>
        <div style={sx.div1}>Upload CSV</div>
        <div>
          <div style={sx.div2}>
            <div>
              <img src="/bellicon.svg" alt="" />
            </div>
            <div>
              <img
                style={{ borderRadius: "50px" }}
                src="/profileicon.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="drop-body" style={sx.dropBody}>
        <div onDragOver={handleDragOver} onDrop={handleDrop} style={sx.div3}>
          {!selectedFile || array.length !== 0 ? (
            <div style={sx.div4}>
              <img src="/excel.svg" alt="" />
              <div style={sx.div5}>
                Drop your excel sheet here or{" "}
                <span
                  style={{ color: "#605BFF", cursor: "pointer" }}
                  onClick={handleBrowseClick}
                >
                  &nbsp;browse
                </span>
              </div>

              <input
                type="file"
                id="fileInput"
                accept=".csv"
                style={{ display: "none" }}
                onChange={(event) => setSelectedFile(event.target.files[0])}
              />
            </div>
          ) : (
            <div style={sx.div6}>
              <img src="/excel.svg" alt="" />
              {selectedFile && <div style={sx.div7}>{selectedFile.name}</div>}
              <button style={sx.div8} onClick={handleRemoveFile}>
                Remove
              </button>
            </div>
          )}
          <div style={{ marginTop: "4%" }}>
            <button style={sx.div9} onClick={handleClick}>
              <img src="/uploadicon.svg" alt="" />
              <div style={sx.div10}>Upload</div>
            </button>
          </div>
        </div>
      </div>
      {array.length !== 0 ? (
        <div style={{ margin: "5%" }}>
          <Table data={array} />
        </div>
      ) : null}
    </div>
  );
}

const sx = {
  navbar: {
    paddingTop: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 5%",
  },
  div1: { fontFamily: "figtree", fontSize: "24px", fontWeight: "600" },
  div2: {
    display: "flex",
    width: "100px",
    alignItems: "center",
    justifyContent: "space-around",
  },
  dropBody: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "10%",
  },
  div3: {
    width: "596px",
    height: "367px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  div4: {
    width: "564px",
    height: "258px",
    border: "2px #c3c3c3 dashed",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  div5: {
    fontFamily: "figtree",
    fontWeight: "400",
    fontSize: "16px",
    paddingTop: "5%",
  },
  div6: {
    width: "564px",
    height: "258px",
    border: "2px #c3c3c3 dashed",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  div7: {
    paddingTop: "5%",
    paddingBottom: "5%",
    fontFamily: "figtree",
    fontSize: "16px",
    fontWeight: "400",
  },
  div8: {
    borderRadius: "10px",
    background: "#fff",
    border: "none",
    color: "#D33030",
    fontFamily: "figtree",
    fontSize: "14px",
    fontWeight: "400",
    cursor: "pointer",
  },
  div9: {
    width: "574px",
    borderRadius: "10px",
    background: "#5865f2",
    border: "none",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  div10: {
    marginLeft: "15px",
    fontFamily: "figtree",
    fontSize: "14px",
    fontWeight: "600",
    color: "#ffffff",
  },
};
