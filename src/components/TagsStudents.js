import React, {useState} from "react";

const TagsStudents= (props) => {
    const {student} = props;
    const [tags, setTags] = useState([]);
    const [newTagName, setNewTagName] = useState('');
    
    const handleKeyPress = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            setNewTagName('');
          if(student.tag){
              student.tags = [...student.tags, event.target.value]
            }else {
              student.tags = [event.target.value];
            }         
        }
        
    }
    
    const onChange = (event) => {
        setNewTagName(event.target.value);
        
      }

      const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
      };

    return (
        
        <div className="tags-input">
            
            <ul id="tags">
                {tags.map((tag, index) => (
                   <li key ={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                         onClick={() => removeTags(index)}
                        >
                         x
                        </span>
                        </li>
                ))}
            </ul>
            <input
                type="text"
                id= "new-tag"
                value={newTagName}
                className = "tagInput"
                placeholder="Add tags"
                onChange={onChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};
export default TagsStudents;