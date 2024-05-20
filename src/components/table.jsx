import React, { useState } from 'react';
import './table.css';

export default function Table({ data }) {
  const [selectedTags, setSelectedTags] = useState({});

  const handleTagSelect = (index, tag) => {
    try {
      setSelectedTags(prevState => {
        const updatedTags = { ...prevState };
        if (!updatedTags[index]) {
          updatedTags[index] = [];
        }
        if (!updatedTags[index].includes(tag)) {
          updatedTags[index].push(tag);
        }
        return updatedTags;
      });
    } catch (error) {
      console.error("error",error)
    }
 
  };

  const handleTagRemove = (index, tag) => {
    try {
      setSelectedTags(prevState => {
        const updatedTags = { ...prevState };
        if (updatedTags[index]) {
          updatedTags[index] = updatedTags[index].filter(t => t !== tag);
        }
        return updatedTags;
      });
    } catch (error) {
      console.error("error removing tag",error)
    }

  };

  return (
    <>
      <h2>Uploads</h2>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Links</th>
              <th>Prefix</th>
              <th>Add Tags</th>
              <th>Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="table-row">
                <td>{String(index + 1).padStart(2, '0')}</td>
                <td><a href={item.links} target="_blank" rel="noopener noreferrer">{item.links}</a></td>
                <td>{item.prefix}</td>
                <td>
                  <select
                    style={selectStyle}
                    onChange={(e) => handleTagSelect(index, e.target.value)}
                  >
                    <option value="" disabled>Select Tags</option>
                    {item["select tags"].split(",").map((tag, tagIndex) => (
                      <option key={tagIndex} value={tag} style={optionStyle}>{tag}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <div className="selected-tags">
                    {(selectedTags[index] || []).map((tag, tagIndex) => (
                      <span key={tagIndex} className="selected-tag">
                        {tag}
                        <span 
                          className="remove-tag" 
                          onClick={() => handleTagRemove(index, tag)}
                        >
                          &times;
                        </span>
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}


const selectStyle = {
  width: '70%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  fontSize: '14px',


};

const optionStyle = {
  paddingTop: '20px',
  margin:'10px',
  border: '1px solid #ccc',
};
